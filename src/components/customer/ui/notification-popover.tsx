import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Box,
  Tabs,
  TabList,
  Tab,
  Text,
  VStack,
  useDisclosure,
  Fade,
  IconButton,
} from "@chakra-ui/react";
import { NotificationContainer } from "./notification-container";
import { Icon } from "@components/icon";
import { Check } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  differenceInDays,
  parseISO,
  format,
  isToday,
  isYesterday,
} from "date-fns";
import { useNotifications } from "@hooks/swr";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@mutations/notification";
import { Notification } from "@utils/types";
import { useToastContext } from "@hooks/context";

type GroupedNotifications = {
  [key: string]: Notification[];
};

const filterOptions = ["all_contribution", "recent", "older"];

export const NotificationPopover = () => {
  const { data: notifications, isLoading, error, mutate } = useNotifications();
  const { openToast } = useToastContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("all_contribution");
  const {
    isOpen: isMarkAllVisible,
    onOpen: showMarkAll,
    onClose: hideMarkAll,
  } = useDisclosure();

  // Function to group notifications by human-readable date
  const groupNotificationsByDate = (
    notifications: Notification[],
  ): GroupedNotifications => {
    const grouped: GroupedNotifications = {};

    notifications?.forEach((notification) => {
      const date = parseISO(notification.date);
      let groupKey: string;

      if (isToday(date)) {
        groupKey = "Today";
      } else if (isYesterday(date)) {
        groupKey = "Yesterday";
      } else if (differenceInDays(new Date(), date) <= 7) {
        groupKey = `${differenceInDays(new Date(), date)} days ago`;
      } else {
        groupKey = format(date, "MMMM d, yyyy");
      }

      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }

      grouped[groupKey].push(notification);
    });

    return grouped;
  };

  const filteredNotifications = notifications
    ? notifications.filter((notification) => {
        if (filter === "all_contribution") {
          return true;
        }

        const daysAgo = differenceInDays(
          new Date(),
          parseISO(notification.date),
        );
        if (filter === "recent") {
          return daysAgo <= 2;
        }
        if (filter === "older") {
          return daysAgo > 2;
        }
        return true;
      })
    : [];

  // Group the filtered notifications by date
  const groupedNotifications = groupNotificationsByDate(filteredNotifications);

  // Check if there are any unread notifications
  const hasUnreadNotifications = filteredNotifications?.some(
    (notification: Notification) => !notification.isRead,
  );

  // Handle scroll for showing "Mark all as read" button
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Show "Mark all as read" button after scrolling 60%
      if (progress > 60 && hasUnreadNotifications) {
        showMarkAll();
      } else if (progress < 50) {
        hideMarkAll();
      }
    }
  }, [hasUnreadNotifications, showMarkAll, hideMarkAll]);

  const handleMarkAsRead = async (id: string) => {
    try {
      const request = await markNotificationAsRead(id);
      if (!request?.ok) {
        const response = await request?.json();
        openToast(response.message, "error");
      } else {
        const response = await request?.json();
        openToast(response.message, "success");
        mutate();
      }
    } catch (error) {
      openToast("Failed to mark notification as read", "error");
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      const request = await markAllNotificationsAsRead();
      if (!request?.ok) {
        const response = await request?.json();
        openToast(response.message, "error");
      } else {
        const response = await request?.json();
        openToast(response.message, "success");
        mutate();
        hideMarkAll();
      }
    } catch (error) {
      openToast("Failed to mark all notification as read", "error");
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button
          background="var(--btn-secondary-7)"
          boxSize="50px"
          rounded="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{
            background: "var(--btn-secondary-7)",
          }}
          position="relative"
        >
          <Icon name="notification" />
          {hasUnreadNotifications && (
            <Box
              position="absolute"
              top="12px"
              right="14px"
              w="12px"
              h="12px"
              bg="red.500"
              borderRadius="full"
              border="2px solid white"
            />
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent maxW="552px" w="450px" minH="400px" maxH="550px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Notifications
        </PopoverHeader>
        <PopoverBody px="14px" py="20px">
          <Box
            w="full"
            h="100%"
            maxH="calc(550px - 120px)"
            overflowY="auto"
            ref={scrollRef}
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                border: "2px solid transparent",
                backgroundClip: "content-box",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            {/* Tabs for Filtering Notifications */}
            <Tabs
              variant="soft-rounded"
              colorScheme="gray"
              display="flex"
              columnGap="0.3rem"
              onChange={(index) => {
                setFilter(filterOptions[index]);
              }}
            >
              <TabList px="20px" py="10px" rounded="3xl" cursor="pointer">
                <Tab>All Contribution</Tab>
                <Tab>Recent</Tab>
                <Tab>Older</Tab>
              </TabList>
            </Tabs>

            {isLoading ? (
              <Box textAlign="center" py={8}>
                <Text color="gray.500">Loading notifications...</Text>
              </Box>
            ) : Object.keys(groupedNotifications).length === 0 ? (
              <Box textAlign="center" py={8}>
                <Text color="gray.500">No notifications found</Text>
              </Box>
            ) : (
              Object.entries(groupedNotifications).map(
                ([dateGroup, notifications]) => (
                  <Box key={dateGroup} w="full" mt="1rem">
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="400"
                      color="#626262"
                    >
                      {dateGroup}
                    </Text>
                    <VStack spacing="8px" mt="4px">
                      {notifications.map((notification) => (
                        <NotificationContainer
                          key={notification.id}
                          time={format(parseISO(notification.date), "h:mm a")}
                          isUnread={!notification.isRead}
                          onMarkAsRead={() =>
                            handleMarkAsRead(notification.notificationID)
                          }
                        >
                          <Text
                            fontFamily="Poppins"
                            fontSize="16px"
                            fontWeight="500"
                            color="#000000"
                          >
                            {notification.message}
                          </Text>
                          <Text
                            fontFamily="var(--poppins)"
                            fontWeight="400"
                            fontSize="14px"
                            color="#706E6E"
                          >
                            {notification.subject}
                          </Text>
                        </NotificationContainer>
                      ))}
                    </VStack>
                  </Box>
                ),
              )
            )}
          </Box>

          {/* Fixed "Mark all as read" button at the bottom */}
          <Fade in={isMarkAllVisible}>
            <Box
              position="fixed"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              zIndex={10}
              bg="white"
              boxShadow="md"
              borderRadius="full"
              p={1}
            >
              <Button
                onClick={handleMarkAllAsRead}
                size="md"
                colorScheme="blue"
                fontWeight="medium"
                leftIcon={<Check size={18} />}
                px={6}
                borderRadius="full"
              >
                Mark all as read
              </Button>
            </Box>
          </Fade>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
