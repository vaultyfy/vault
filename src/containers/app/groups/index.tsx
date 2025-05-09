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
import { useMyGroupsWithStatus } from "@hooks/swr";
import { Link } from "@tanstack/react-router";
import { skeleton } from "@utils/misc";
import { Group } from "@utils/types";
import dayjs from "dayjs";
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
  const { data: activeGroups, isLoading: isActiveGroupsLoading } =
    useMyGroupsWithStatus("Active");
  const { data: completedGroups, isLoading: isCompletedGroupsLoading } =
    useMyGroupsWithStatus("Completed");
  const [activeGroup, setActiveGroup] = React.useState<Group | undefined>(
    undefined,
  );
  const [isGroupPaymentCardsVisible, setIsGroupPaymentCardsVisible] =
    React.useState<boolean>(false);
  const [tabIndex, setTabIndex] = React.useState(0);

  React.useEffect(() => {
    if (joinedGroups?.length && activeGroup === undefined) {
      setActiveGroup(joinedGroups[0]);
    }
  }, [joinedGroups]);

  const handleActiveGroup = (groupId: string) => {
    let group;
    if (tabIndex === 0) {
      group = joinedGroups?.find((group) => group.groupID === groupId);
    } else if (tabIndex === 1) {
      group = activeGroups?.find((group) => group.groupID === groupId);
    } else {
      group = completedGroups?.find((group) => group.groupID === groupId);
    }

    if (!group) return;
    if (isMobile) {
      setIsGroupPaymentCardsVisible(true);
    }
    setActiveGroup(group);
  };

  // current logged-in user in the participants array
  const me = activeGroup?.participants.find(
    (participant) => participant.customer?.id === user?.id,
  );

  console.log("user", user?.id)

  const contributionDates = me?.contributionDates.map((date) =>
    dayjs(date).format("DD-MMMM-YYYY"),
  );
  const missedContributionDates = me?.missedContributionDates.map((date) =>
    dayjs(date).format("DD-MMMM-YYYY"),
  );
  const nextContributionDate = me?.nextContributionDate;
  const futureContributionDates = contributionDates?.filter(
    (date) => dayjs(date) > dayjs(),
  );

  console.log("future dates", futureContributionDates)
  console.log("contribution dates", contributionDates)
  console.log("Me", me)

  const handleTabChange = (index: number) => {
    setTabIndex(index);
    if (index === 0 && joinedGroups?.length) {
      setActiveGroup(joinedGroups[0]);
    } else if (index === 1 && activeGroups?.length) {
      setActiveGroup(activeGroups[0]);
    } else if (index === 2 && completedGroups?.length) {
      setActiveGroup(completedGroups[0]);
    }
  };
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
          <Tabs
            variant="soft-rounded"
            index={tabIndex}
            onChange={handleTabChange}
          >
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

            <TabPanels>
              <TabPanel px="0px" pt="1.4em">
                {isLoading ? (
                  <Box mt=".8em">
                    <GroupCardSkeleton />
                  </Box>
                ) : (
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
                        {joinedGroups?.map((group) => (
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
                        ))}
                      </>
                    )}
                  </Stack>
                )}
              </TabPanel>

              <TabPanel px="0px" pt="1.4em">
                {isActiveGroupsLoading ? (
                  <Box mt=".8em">
                    <GroupCardSkeleton />
                  </Box>
                ) : (
                  <Stack direction="column" gap=".8em">
                    {!activeGroups?.length ? (
                      <Center height="500px">
                        <Text fontSize="md" color="var(--grey)">
                          You don't have any active groups. Find available ones{" "}
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
                        {activeGroups?.map((group) => (
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
                        ))}
                      </>
                    )}
                  </Stack>
                )}
              </TabPanel>

              <TabPanel px="0px" pt="1.4em">
                {isCompletedGroupsLoading ? (
                  <Box mt=".8em">
                    <GroupCardSkeleton />
                  </Box>
                ) : (
                  <Stack direction="column" gap=".8em">
                    {!completedGroups?.length ? (
                      <Center height="500px">
                        <Text fontSize="md" color="var(--grey)">
                          You don't have any completed groups yet.
                        </Text>
                      </Center>
                    ) : (
                      <>
                        {completedGroups?.map((group) => (
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
                        ))}
                      </>
                    )}
                  </Stack>
                )}
              </TabPanel>
            </TabPanels>
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
              {dayjs().format("DD-MM-YYYY") === nextContributionDate && (
                <PaymentCard
                  deadlineDate={dayjs(nextContributionDate).format(
                    "DD-MMMM-YYYY",
                  )}
                  dateType="start-date"
                  amount={activeGroup?.contributionAmount}
                  dayOfWeek={dayjs(nextContributionDate).format("dddd")}
                  isActive
                  groupId={activeGroup?.groupID || ""}
                  participantId={me?.participantID || ""}
                />
              )}
              {missedContributionDates &&
                missedContributionDates?.length > 0 && (
                  <>
                    {missedContributionDates?.map((date) => {
                      return (
                        <PaymentCard
                          deadlineDate={date}
                          dateType="missed-date"
                          amount={activeGroup?.contributionAmount}
                          dayOfWeek={dayjs(date).format("dddd")}
                          isActive
                          groupId={activeGroup?.groupID || ""}
                          participantId={me?.participantID || ""}
                        />
                      );
                    })}
                  </>
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
                      index === contributionDates?.length - 1
                        ? "10px"
                        : ""
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
