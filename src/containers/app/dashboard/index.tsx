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
} from "@chakra-ui/react";
import { OverviewCard } from "@components/customer/ui";
import { ChevronDown } from "lucide-react";
import { ActivitiesTable } from "@components/customer/tables";
import { Analytics } from "@components/ui";

export const Dashboard = () => {
  return (
    <>
      <Box width="100%" minH="100dvh">
        <SimpleGrid columns={{ lg: 4, md: 2, base: 2 }} gap={{ lg: ".8em", md: ".6em", base: ".4em"}}>
          <OverviewCard
            cardIcon="calendar"
            cardTitle="Wallet balance"
            amount="500k"
            paidDate="23-12-2025"
            cardGradient="var(--main-gradient)"
          />
          <OverviewCard
            cardIcon="time-is-money"
            cardTitle="Wallet balance"
            amount="500k"
            hasFilter={true}
            hasProgress={true}
            progressLevel={40}
            progressColor="var(--main-gradient)"
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
          />
          <OverviewCard
            cardIcon="piggy-bank"
            cardTitle="Total expected return"
            amount="5M"
            hasFilter={true}
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
          />
          <OverviewCard
            cardIcon="trophy"
            cardTitle="Rewards & milestones"
            hasFilter={true}
            hasProgress={true}
            progressLevel={40}
            progressColor="var(--main-gradient)"
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
            cycle={1}
          />
        </SimpleGrid>
        {/* the empty state*/}
        {/* <Center w="full" minH={"100vh"} border="2px solid black" mt={4}>
        <Text
          as="h3"
          fontSize={"46px"}
          fontWeight={"600"}
          fontFamily={"poppins"}
          color="var(--grey)"
        >
          Start your saving journey
        </Text>
      </Center> */}

        {/* for the analtyics */}
        <Flex
          gap="10px"
          w="100%"
          direction={{ base: "column", lg: "row" }}
          mt={4}
        >
          <Box
            width={{ base: "100%", lg: "40%" }}
            boxShadow="var(--table-shadow)"
            p="18px"
            minH="480px"
            rounded="lg"
            border={{ lg: "none", md: "none", base: "0.5px solid var(--border-muted)" }}
          >
            <Box w="full">
              <Text
                as="h5"
                fontFamily="var(--clash-grotesk-500)"
                fontSize={{ base: "16px", lg: "24px" }}
                color="var(--dark)"
              >
                Analytics
              </Text>
              <Text
                fontFamily="var(--clash-grotesk-500)"
                fontSize={{ base: "12px", lg: "14px" }}
                color="#000000E60"
              >
                Saving trends
              </Text>
            </Box>
            <Stack w="full" mt="1.4em">
              <HStack justifyContent="space-between" w="full">
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  fontWeight="600"
                  color="var(--dark)"
                  textTransform="uppercase"
                >
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
                    }}
                  >
                    Month
                  </MenuButton>
                  <MenuList px=".4em" py=".4em">
                    <MenuItem
                      _hover={{
                        background: "var(--grey-100)",
                      }}
                      transition="all .3s ease-out"
                      borderRadius="4px"
                    >
                      Month
                    </MenuItem>
                    <MenuItem
                      _hover={{
                        background: "var(--fade-border)",
                      }}
                      transition="all .3s ease-out"
                      borderRadius="4px"
                    >
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
            boxShadow="var(--table-shadow)"
          >
            <HStack w="full" justifyContent="space-between">
              <Text
                as="h5"
                fontFamily={"var(--clash-grotesk-500)"}
                fontSize={{ base: "16px", lg: "24px" }}
                lineHeight="19px"
                color="var(--dark)"
              >
                Activities
              </Text>
            </HStack>

            <TableContainer w="full" mt="2rem">
              <ActivitiesTable />
            </TableContainer>
          </Box>
        </Flex>
      </Box>

      {/* create group modal */}
    </>
  );
};
