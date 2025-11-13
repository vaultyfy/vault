import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  ChakraProvider,
  extendTheme,
  IconButton,
  useDisclosure,
  Fade,
  Heading,
} from "@chakra-ui/react";
import {
  differenceInDays,
  parseISO,
  format,
  isToday,
  isYesterday,
  subDays,
} from "date-fns";
import { useNotifications } from "@hooks/swr";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@mutations/notification";
import { Notification } from "@utils/types";
import { useToastContext } from "@hooks/context";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        fontFamily: "Arial, sans-serif",
      },
    },
  },
});

type GroupedNotifications = {
  [key: string]: Notification[];
};

const filterOptions = ["all_contribution", "recent", "older"];

export default function NotificationPage() {
  const { data: notifications, isLoading, error, mutate } = useNotifications();
  const { openToast } = useToastContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [scrollProgress, setScrollProgress] = useState(0);

  const [filter, setFilter] = useState("all_contribution");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    isOpen: isMarkAllVisible,
    onOpen: showMarkAll,
    onClose: hideMarkAll,
  } = useDisclosure();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectFilter = (option: string) => {
    setFilter(option);
    setIsDropdownOpen(false);
  };

  // Function to group notifications by human-readable date
  const groupNotificationsByDate = (
    notifications: Notification[]
  ): GroupedNotifications => {
    const grouped: GroupedNotifications = {};

    notifications.forEach((notification) => {
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

  // Filter notifications based on selected filter
  const filteredNotifications = notifications
    ? notifications.filter((notification) => {
        if (filter === "all_contribution") {
          return true;
        }

        const daysAgo = differenceInDays(
          new Date(),
          parseISO(notification.date)
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
  const hasUnreadNotifications = filteredNotifications.some(
    (notification: Notification) => !notification.isRead
  );

  // Handle scroll for progress and showing "Mark all as read" button
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      // setScrollProgress(progress);

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
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection="column"
        h="100vh"
        bg="white"
        maxW="md"
        mx="auto"
        overflowX="hidden"
        position="relative">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          gap={4}
          py={3}>
          <Text fontSize="28px" fontWeight={500} color="#1c1c1c">
            Notification
          </Text>
          <Box position="relative">
            <Button
              onClick={toggleDropdown}
              display="flex"
              alignItems="center"
              fontSize="sm"
              color="#04040499"
              bg="#F6F6F6"
              borderRadius="full"
              px={4}
              py={1.5}
              h="39px"
              textTransform="capitalize">
              {filter.replaceAll("_", " ")}
              <Box
                as={ChevronDown}
                w={4}
                h={4}
                ml={1}
                transition="transform 0.2s"
                transform={isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"}
              />
            </Button>

            {isDropdownOpen && (
              <Box
                position="absolute"
                right={0}
                mt={1}
                w="48"
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                zIndex={10}
                border="1px"
                borderColor="gray.100">
                <Box py={1}>
                  {filterOptions.map((option) => (
                    <Button
                      key={option}
                      onClick={() => selectFilter(option)}
                      display="block"
                      w="full"
                      textAlign="left"
                      px={4}
                      py={2}
                      fontSize="sm"
                      bg={filter === option ? "gray.100" : "transparent"}
                      fontWeight={filter === option ? "medium" : "normal"}
                      _hover={{ bg: "gray.50" }}
                      h="auto"
                      minH="unset"
                      variant="ghost"
                      textTransform="capitalize">
                      {option.replace("_", " ")}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Flex>

        {/* Scroll progress indicator */}
        {/* <Box
          position="absolute"
          top="70px"
          left="0"
          width={`${scrollProgress}%`}
          height="2px"
          bg="#007AFF"
          opacity={0.6}
          transition="width 0.1s"
          zIndex={1}
        /> */}

        <Box
          px={4}
          py={2}
          flex="1"
          overflowY="auto"
          ref={scrollRef}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#EAEAEA",
              borderRadius: "24px",
            },
          }}>
          {isLoading ? (
            <Flex alignItems="center" justifyContent="center" h="40">
              <Text color="gray.500">Loading notifications...</Text>
            </Flex>
          ) : Object.keys(groupedNotifications).length === 0 ? (
            <Flex alignItems="center" justifyContent="center" h="40">
              <Text color="gray.500">No notifications found</Text>
            </Flex>
          ) : (
            <VStack spacing={4} align="stretch" pb={4}>
              {Object.entries(groupedNotifications).map(
                ([dateGroup, notifications]) => (
                  <Box key={dateGroup}>
                    <Heading
                      fontSize="12px"
                      fontWeight="500"
                      color="##626262"
                      textTransform="capitalize"
                      letterSpacing="wide"
                      mb="8px"
                      mt={4}>
                      {dateGroup}
                    </Heading>
                    {notifications.map((notification: Notification) => (
                      <Box
                        key={notification.id}
                        width="100%"
                        maxW="100%"
                        height="auto"
                        borderRadius="8px"
                        border="0.5px solid #EAEAEA"
                        p={4}
                        position="relative"
                        bg="white"
                        opacity={notification.isRead ? 0.7 : 1}
                        _hover={{
                          "& .notification-read-button": {
                            opacity: notification.isRead ? 0 : 0.8,
                          },
                        }}
                        transition="all 0.2s"
                        borderLeft={
                          notification.isRead
                            ? "0.5px solid #EAEAEA"
                            : "3px solid #007AFF"
                        }
                        mb={3}>
                        {!notification.isRead && (
                          <IconButton
                            aria-label="Mark as read"
                            icon={<Check size={14} />}
                            size="xs"
                            position="absolute"
                            top="8px"
                            right="8px"
                            opacity={0}
                            className="notification-read-button"
                            variant="ghost"
                            color="gray.400"
                            _hover={{ color: "gray.600", bg: "gray.50" }}
                            onClick={() =>
                              handleMarkAsRead(notification.notificationID)
                            }
                          />
                        )}
                        <Text
                          fontSize="14px"
                          fontWeight={400}
                          mb={2}
                          color="#000000">
                          {notification.message}
                        </Text>
                        <Text
                          fontSize="14px"
                          fontWeight={400}
                          color="#706E6E"
                          mb={2}>
                          {notification.subject}
                        </Text>
                        <Text
                          fontSize="12px"
                          fontWeight={600}
                          color="#B4B4B4"
                          display="block"
                          textAlign="right">
                          {format(parseISO(notification.date), "h:mm a")}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                )
              )}
            </VStack>
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
            p={1}>
            <Button
              onClick={handleMarkAllAsRead}
              size="md"
              colorScheme="blue"
              fontWeight="medium"
              leftIcon={<Check size={18} />}
              px={6}
              borderRadius="full">
              Mark all as read
            </Button>
          </Box>
        </Fade>
      </Flex>
    </ChakraProvider>
  );
}
