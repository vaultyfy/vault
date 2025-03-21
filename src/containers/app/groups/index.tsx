import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { MyGroupCard, PaymentCard, Calendar } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { GroupCardSkeleton, PaymentCardSkeleton } from "@components/skeletons";
import { useAuthContext } from "@hooks/context";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useJoinedGroups } from "@hooks/swr";
import { Link } from "@tanstack/react-router";
import { skeleton } from "@utils/misc";
import { Group } from "@utils/types";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import slugify from "slugify";

export const GROUPS_TAB_ITEMS = [
  "All groups",
  "Active groups",
  "Completed groups",
].map((tab) => ({
  name: tab,
  id: crypto.randomUUID(),
  slug: slugify(tab),
}));

export const Groups = () => {
  const { user } = useAuthContext();
  const { isMobile } = useMobileScreens();
  const { data: joinedGroups, count, isLoading } = useJoinedGroups();
  const [activeGroup, setActiveGroup] = React.useState<Group | undefined>(
    undefined,
  );
  const [isGroupPaymentCardsVisible, setIsGroupPaymentCardsVisible] =
    React.useState<boolean>(false);

  console.log("groups", joinedGroups);

  React.useEffect(() => {
    if (joinedGroups?.length && activeGroup === undefined) {
      setActiveGroup(joinedGroups[0]);
    }
  }, [joinedGroups]);

  const handleActiveGroup = (groupId: string) => {
    const group = joinedGroups?.find((group) => group.groupID === groupId);
    if (!group) return;
    if (isMobile) {
      setIsGroupPaymentCardsVisible(true);
    }
    setActiveGroup(group);
  };

  const contributionDates = activeGroup?.participants
    .find((participant) => participant?.customer?.id === user?.id)
    ?.contributionDates.map((date) => dayjs(date).format("DD-MMMM-YYYY"));

  return (
    <Flex
      as="section"
      width="100%"
      minHeight="100vh"
      gap={{ lg: "1em", md: "1em", base: "2em" }}
      flexWrap="wrap"
    >
      <Box
        width={{ base: "100%", md: "50%", lg: "50%" }}
        display={{
          lg: "block",
          md: "block",
          base: isGroupPaymentCardsVisible ? "none" : "block",
        }}
      >
        <HStack
          spacing="10px"
          rounded="10px"
          width="100%"
          p="10px"
          bgGradient="var(--main-gradient)"
          maxHeight="99px"
        >
          <Image
            src="/img/piggy-bank-up.svg"
            alt="piggy bank up icon"
            boxSize="70px"
          />
          <Text
            fontWeight="400"
            fontSize={{ base: "14px", lg: "14px", xl: "16px", md: "14px" }}
            color="var(--white-fade)"
          >
            Complete{" "}
            <Text as="span" fontWeight="600">
              three contribution cycles
            </Text>{" "}
            in your current group to unlock access to higher-value thrift groups
            and larger payouts
          </Text>
        </HStack>

        <Box width="full" mt="1em">
          <Tabs variant="soft-rounded">
            <TabList
              gap={{ lg: ".6em", md: ".6em", base: ".4em" }}
              overflowX="auto"
            >
              {GROUPS_TAB_ITEMS.map((tab) => {
                return (
                  <Tab
                    _selected={{
                      background: "var(--grey-100)",
                    }}
                    _hover={{
                      background: "var(--grey-100)",
                    }}
                    transition="all .3s ease-in"
                    px="1.2em"
                    py=".8em"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="500"
                    whiteSpace="nowrap"
                    key={tab.id}
                  >
                    {tab.name}
                  </Tab>
                );
              })}
            </TabList>

            {isLoading ? (
              <Box mt=".8em">
                <GroupCardSkeleton />
              </Box>
            ) : (
              <TabPanels>
                <TabPanel px="0px" pt="1.4em">
                  <Stack direction="column" gap=".8em">
                    {count === 0 ? (
                      <Center height="500px">
                        <Text fontSize="md" color="var(--grey)">
                          You have not joined any group. Find available ones{" "}
                          <Link
                            style={{ textDecoration: "underline" }}
                            to="/dashboard/explore"
                          >
                            here
                          </Link>
                        </Text>
                      </Center>
                    ) : (
                      <>
                        {joinedGroups?.map((group, index) => {
                          return (
                            <MyGroupCard
                              key={group.id}
                              data={group}
                              bgColor={
                                activeGroup?.groupID === group.groupID
                                  ? "var(--card-bg-active)"
                                  : ""
                              }
                              setActiveGroup={() =>
                                handleActiveGroup(group.groupID)
                              }
                              border={`0.5px solid ${activeGroup?.groupID === group.groupID ? "var(--primary)" : "var(--border-muted)"}`}
                            />
                          );
                        })}
                      </>
                    )}
                  </Stack>
                </TabPanel>
              </TabPanels>
            )}
          </Tabs>
        </Box>
      </Box>

      <Box
        width={{ lg: "48%", xl: "35%", md: "45%", base: "100%" }}
        position="sticky"
        top="80px"
        display={{
          lg: "block",
          md: "block",
          base: isGroupPaymentCardsVisible ? "block" : "none",
        }}
      >
        {isLoading ? (
          <Skeleton
            width={{ lg: "220px", md: "80%" }}
            height="16px"
            borderRadius="6px"
            mb=".4em"
            startColor={skeleton.light.startColor}
            endColor={skeleton.light.endColor}
          />
        ) : (
          <HStack justifyContent="flex-start" width="full">
            {isMobile && (
              <Box
                onClick={() => setIsGroupPaymentCardsVisible(false)}
                cursor="pointer"
              >
                <Icon name="arrow-left" />
              </Box>
            )}
            <Text
              fontFamily="var(--clash-grotesk-400)"
              fontWeight={{ base: "500", lg: "400" }}
              fontSize={{ base: "20px", lg: "24px" }}
              color="var(--text-1)"
            >
              {activeGroup?.name}
            </Text>
          </HStack>
        )}
        <Stack direction="column" gap=".25em">
          <Box
            width="full"
            roundedTop="10px"
            p="1rem"
            border="0.5px solid var(--border-muted)"
          >
            <Calendar />
          </Box>
          {isLoading ? (
            <PaymentCardSkeleton />
          ) : (
            <>
              {dayjs().format("DD-MM-YYYY") ===
                dayjs(activeGroup?.startDate).format("DD-MM-YYYY") && (
                <PaymentCard
                  deadlineDate={dayjs(activeGroup?.startDate).format(
                    "DD-MMMM-YYYY",
                  )}
                  dateType="start-date"
                  amount={activeGroup?.contributionAmount}
                  dayOfWeek={dayjs(activeGroup?.startDate).format("dddd")}
                  isActive
                  groupId={activeGroup?.groupID || ""}
                  participantId={
                    activeGroup?.participants.find(
                      (participant) => participant?.customer?.id === user?.id,
                    )?.participantID || ""
                  }
                />
              )}
              {contributionDates?.map((contributionDate, index) => {
                return (
                  <PaymentCard
                    key={index}
                    deadlineDate={contributionDate}
                    dateType="due-date"
                    groupId={activeGroup?.groupID || ""}
                    participantId={
                      activeGroup?.participants.find(
                        (participant) => participant?.customer?.id === user?.id,
                      )?.participantID || ""
                    }
                    amount={activeGroup?.contributionAmount}
                    dayOfWeek={dayjs(contributionDate).format("dddd")}
                    isActive={
                      dayjs().format("DD-MMMM-YYYY") === contributionDate
                    }
                    roundedBottom={
                      index === contributionDates?.length - 1 ? "10px" : ""
                    }
                  />
                );
              })}
            </>
          )}
        </Stack>
      </Box>
    </Flex>
  );
};
