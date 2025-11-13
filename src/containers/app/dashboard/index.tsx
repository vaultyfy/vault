import {
  Box,
  Text,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  TableContainer,
  SimpleGrid,
  Stack,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { OverviewCard } from "@components/customer/ui";
import { ChevronDown } from "lucide-react";
import { ActivitiesTable } from "@components/customer/tables";
import { Analytics } from "@components/ui";
import React from "react";
import { useMobileScreens } from "@hooks/mobile-screen";
import { CreateGroupModal } from "@layouts/modal-layout";
import { useUiComponentStore } from "@store/ui";
import {
  useConsistencyStats,
  useJoinedGroups,
  useReferralStats,
  useRemainingContributions,
  useSavingsTrend,
  useUser,
  useWallet,
} from "@hooks/swr";
import { Link } from "@components/link";
import { RemainingContributionsParams } from "@queries/get-wallet";

export const Dashboard = () => {
  const { store, updateUiStore } = useUiComponentStore();
  const { isMobile } = useMobileScreens();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cyclesCompleted, isLoading: loadingCycleCount } = useUser();

  const { data: referrals } = useReferralStats();
  const { data: consistency } = useConsistencyStats();
  const refPercentage = referrals?.referralPercentage;
  const consistencyPercentage = consistency?.progressPercentage;
  const milestonesProgress =
    Number(consistencyPercentage) + Number(refPercentage) / 2;

  React.useEffect(() => {
    if (store.ui === "create-group" && !isMobile) {
      onOpen();
    }
  }, []);

  const closeModal = () => {
    updateUiStore({ ui: "" });
    onClose();
  };

  const {
    data: joinedGroups,
    count,
    isLoading: loadingGroups,
  } = useJoinedGroups();
  const { walletBalance, lastUpdated, isLoading, expectedReturns } =
    useWallet();
  // const { data } = useSavingsTrend();
  const [currentFilter, setCurrentFilter] =
    React.useState<RemainingContributionsParams["filter"]>("month");
  const {
    total,
    percentage,
    isLoading: loadingRemainingContribs,
  } = useRemainingContributions({ filter: currentFilter });

  return (
    <>
      <Box width="100%" minH="100dvh">
        <SimpleGrid
          columns={{ lg: 4, md: 2, base: 2 }}
          gap={{ lg: ".8em", md: ".6em", base: ".4em" }}>
          <Link to="/dashboard/payments">
            <OverviewCard
              cardIcon="calendar"
              cardTitle="Wallet balance"
              amount={walletBalance}
              paidDate={lastUpdated}
              cardGradient="var(--main-gradient)"
              loading={isLoading}
            />
          </Link>
          <OverviewCard
            cardIcon="time-is-money"
            cardTitle="Remaining contribution"
            amount={total || 0}
            hasFilter={true}
            hasProgress={true}
            progressLevel={percentage}
            progressColor="var(--main-gradient)"
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
            loading={loadingRemainingContribs}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <OverviewCard
            cardIcon="piggy-bank"
            cardTitle="Total expected return"
            amount={expectedReturns}
            hasFilter={true}
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
            loading={isLoading}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <Link to="/dashboard/milestones">
            <OverviewCard
              cardIcon="trophy"
              cardTitle="Rewards & milestones"
              hasProgress={true}
              progressLevel={milestonesProgress}
              progressColor="var(--main-gradient)"
              iconBg="var(--overview-card-secondary)"
              bgColor="var(--main)"
              cycle={cyclesCompleted ?? 0}
              loading={loadingCycleCount}
            />
          </Link>
        </SimpleGrid>
        {count === 0 ? (
          <Center w="full" minH="500px" mt={4}>
            <Text
              fontSize={{ xl: "46px", lg: "40px", md: "40px", base: "32px" }}
              fontFamily="var(--clash-grotesk-600)"
              color="var(--border-muted)"
              textAlign="center">
              Start your savings journey
            </Text>
          </Center>
        ) : (
          <Flex
            gap="10px"
            w="100%"
            direction={{ base: "column", lg: "row" }}
            mt={4}>
            <Box
              width={{ base: "100%", lg: "40%" }}
              boxShadow="var(--table-shadow)"
              p="18px"
              minH="480px"
              rounded="lg"
              border={{
                lg: "none",
                md: "none",
                base: "0.5px solid var(--border-muted)",
              }}>
              <Box w="full">
                <Text
                  as="h5"
                  fontFamily="var(--clash-grotesk-500)"
                  fontSize={{ base: "16px", lg: "24px" }}
                  color="var(--dark)">
                  Analytics
                </Text>
                <Text
                  fontFamily="var(--clash-grotesk-500)"
                  fontSize={{ base: "12px", lg: "14px" }}
                  color="#000000E60">
                  Saving trends
                </Text>
              </Box>
              <Stack w="full" mt="1.4em">
                <HStack justifyContent="space-between" w="full">
                  <Text
                    fontSize={{ base: "14px", lg: "16px" }}
                    fontWeight="600"
                    color="var(--dark)"
                    textTransform="uppercase">
                    Naira
                  </Text>
                  <Menu autoSelect={false}>
                    <MenuButton
                      as={Button}
                      variant={"outline"}
                      rightIcon={<ChevronDown color="var(--grey)" size={14} />}
                      px="1.35rem"
                      py="8px"
                      rounded={"3xl"}
                      colorScheme="blackAlpha"
                      fontSize={{ base: "12px", lg: "14px" }}
                      fontWeight="400"
                      _hover={{
                        background: "none",
                      }}
                      _active={{
                        background: "none",
                      }}>
                      Month
                    </MenuButton>
                    <MenuList px=".4em" py=".4em">
                      <MenuItem
                        _hover={{
                          background: "var(--grey-100)",
                        }}
                        transition="all .3s ease-out"
                        borderRadius="4px">
                        Month
                      </MenuItem>
                      <MenuItem
                        _hover={{
                          background: "var(--fade-border)",
                        }}
                        transition="all .3s ease-out"
                        borderRadius="4px">
                        Year
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
                <Analytics />
              </Stack>
            </Box>

            <Box
              width={{ base: "100%", lg: "60%" }}
              shadow="lg"
              p="18px"
              minH="480px"
              rounded="lg"
              boxShadow="var(--table-shadow)">
              <HStack w="full" justifyContent="space-between">
                <Text
                  as="h5"
                  fontFamily={"var(--clash-grotesk-500)"}
                  fontSize={{ base: "16px", lg: "24px" }}
                  lineHeight="19px"
                  color="var(--dark)">
                  Activities
                </Text>
              </HStack>

              <TableContainer w="full" mt="2rem">
                <ActivitiesTable
                  data={joinedGroups || []}
                  loading={loadingGroups}
                />
              </TableContainer>
            </Box>
          </Flex>
        )}
      </Box>

      <CreateGroupModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};
