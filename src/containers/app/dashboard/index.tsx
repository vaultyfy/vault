import {
  Box,
  Text,
  Flex,
  HStack,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import {
  OverviewCard,
  NotificationPopover,
  CalendarPopover,
} from "@components/customer-dashboard/ui";
import { CirclePlus, CalendarDays, Bell } from "lucide-react";
import { Icon } from "@components/icon";
import { ChevronDown } from "lucide-react";
import { ActivitiesTable } from "@components/customer-dashboard/tables";
import { useState } from "react";
import { CreateGroupModal } from "@components/customer-dashboard/modals/create-group";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Box
        width={{ base: "100%", xl: "90%" }}
        minH={"100dvh"}
        px={{ base: "0.5rem", lg: "0" }}
        pl={{ lg: "1.5rem" }}
        py={"2.5rem"}
      >
        <Flex
          justifyContent="space-between"
          mb={"1rem"}
          display={{ base: "none", lg: "flex" }}
        >
          <Text
            as="h2"
            fontFamily={"var(--clash-grotesk-500)"}
            fontSize={"32px"}
          >
            Welcome back{" "}
            <Text
              as="span"
              color="transparent"
              sx={{
                background: "var(--main-gradient)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              fontFamily={"var(--clash-grotesk-600)"}
            >
              Tom
            </Text>
          </Text>
          <Flex columnGap="1rem" alignItems={"center"}>
            <Button
              bgColor="var(--button-secondary-lighten)"
              width={"180px"}
              height="52px"
              rounded="8px"
              px="9px"
              py="13px"
              leftIcon={<CirclePlus color="#292d32" size="24" />}
              fontFamily={"var(--poppins)"}
              fontWeight="medium"
              fontSize={"14px"}
              _hover={"var(--button-secondary)"}
              _focus={"var(--button-secondary)"}
              onClick={() => setIsOpen(true)}
            >
              Create group
            </Button>
            {/* would have to make this into a reusable component */}
            <HStack columnGap="1rem">
              <CalendarPopover />
              <NotificationPopover />
            </HStack>
          </Flex>
        </Flex>
        <Flex gap="10px" flexWrap={"wrap"} mt={"2rem"}>
          <Box
            // width={{ base: "180px", lg: "252px" }}
            flex={1}
            minHeight={"210px"}
          >
            <OverviewCard
              cardIcon={"calendar"}
              cardTitle="Wallet balance"
              amount={"500k"}
              paidDate={"23-12-2025"}
              cardGradient="var(--main-gradient)"
            />
          </Box>
          <Box
            // width={{ base: "180px", lg: "252px" }}
            flex={1}
            minHeight={"210px"}
          >
            <OverviewCard
              cardIcon={"time-is-money"}
              cardTitle="Wallet balance"
              amount={"500k"}
              hasFilter={true}
              hasProgress={true}
              progressLevel={40}
              progressColor="var(--main-gradient)"
              iconBg="var(--overview-card-secondary)"
              bgColor="var(--main)"
            />
          </Box>
          <Box
            // width={{ base: "180px", lg: "252px" }}
            flex={1}
            minHeight={"210px"}
          >
            <OverviewCard
              cardIcon={"piggy-bank"}
              cardTitle="Remaining Contribution"
              amount={"500k"}
              hasFilter={true}
              hasProgress={true}
              progressLevel={40}
              progressColor="var(--main-gradient)"
              iconBg="var(--overview-card-secondary)"
              bgColor="var(--main)"
              paidMonths={3}
            />
          </Box>
          <Box
            // width={{ base: "180px", lg: "252px" }}
            flex={1}
            minHeight={"210px"}
          >
            <OverviewCard
              cardIcon={"trophy"}
              cardTitle="Rewards & milestones"
              hasFilter={true}
              hasProgress={true}
              progressLevel={40}
              progressColor="var(--main-gradient)"
              iconBg="var(--overview-card-secondary)"
              bgColor="var(--main)"
              cycle={1}
            />
          </Box>
        </Flex>
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
          w={"100%"}
          direction={{ base: "column", lg: "row" }}
          mt={4}
        >
          <Box
            width={{ base: "100%", lg: "40%" }}
            shadow={"lg"}
            // bgColor="#ffffff"
            p="18px"
            minH={"480px"}
            rounded={"lg"}
          >
            <Box w="full">
              <Text
                as="h5"
                fontFamily={"var(--clash-grotesk-500)"}
                fontSize={{ base: "16px", lg: "24px" }}
                color="#000000"
              >
                Analytics
              </Text>
              <Text
                as="p"
                fontFamily={"var(--clash-grotesk-500)"}
                fontSize={{ base: "12px", lg: "14px" }}
                color={"#000000E60"}
              >
                Saving trends
              </Text>
            </Box>
            <Box w={"full"} mt="1.5rem">
              <HStack justifyContent={"space-between"} w={"full"}>
                <Text
                  as="p"
                  fontSize={{ base: "14px", lg: "16px" }}
                  fontFamily={"var(--poppins)"}
                  fontWeight={"600"}
                  color="#181818"
                >
                  Naira
                </Text>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"outline"}
                    rightIcon={<ChevronDown color="var(--grey)" size={14} />}
                    px="1.35rem"
                    py="8px"
                    rounded={"3xl"}
                    colorScheme="blackAlpha"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontFamily={"var(--poppins)"}
                    fontWeight={"400"}
                    _hover={"none"}
                    _focus={"none"}
                  >
                    Month
                  </MenuButton>
                  <MenuList px="10px" py="8px">
                    <MenuItem>Month</MenuItem>
                    <MenuItem>Year</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
              <Box w={"full"}>{/* for the graph */}</Box>
            </Box>
          </Box>
          <Box
            width={{ base: "100%", lg: "60%" }}
            shadow={"lg"}
            p="18px"
            minH={"480px"}
            rounded={"lg"}
          >
            <HStack w="full" justifyContent={"space-between"}>
              <Text
                as="h5"
                fontFamily={"var(--clash-grotesk-500)"}
                fontSize={{ base: "16px", lg: "24px" }}
                lineHeight={"19px"}
                color="#000000"
              >
                Activities
              </Text>
              <Tabs
                variant="soft-rounded"
                colorScheme="gray"
                display={{ base: "none", md: "flex" }}
                columnGap={"0.3rem"}
              >
                <TabList px="20px" py="10px" rounded="3xl" bgColor={"#f6f6f6"}>
                  <Text
                    color="#040404"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontFamily={"var(--poppins)"}
                    fontWeight={"500"}
                  >
                    All Contribution
                  </Text>
                </TabList>
                <TabList px="20px" py="10px" rounded="10px">
                  <Text
                    color="#040404"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontFamily={"var(--poppins)"}
                    fontWeight={"500"}
                  >
                    Active
                  </Text>
                </TabList>
                <TabList px="20px" py="10px" rounded="10px">
                  <Text
                    color="#040404"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontFamily={"var(--poppins)"}
                    fontWeight={"500"}
                  >
                    Ended
                  </Text>
                </TabList>
              </Tabs>

              {/* for mobile views */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDown color="var(--grey)" size={14} />}
                  px="1.35rem"
                  py="8px"
                  rounded={"3xl"}
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontFamily={"var(--poppins)"}
                  fontWeight={"400"}
                  color="#040404"
                  bgColor="#f6f6f6"
                  _hover={"none"}
                  _focus={"none"}
                  display={{ base: "block", md: "none" }}
                >
                  All Contribution
                </MenuButton>
                <MenuList px="10px" py="8px">
                  <MenuItem>All Contribution</MenuItem>
                  <MenuItem>Active</MenuItem>
                  <MenuItem>Ended</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Box as={TableContainer} w="full" mt="2rem">
              <ActivitiesTable />
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* create group modal */}
      <CreateGroupModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
