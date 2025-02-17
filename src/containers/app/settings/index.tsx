import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Image,

} from "@chakra-ui/react";
import { CirclePlus, Menu } from "lucide-react";
import PersonalInfo from "@containers/app/settings/personalInfo/PersonalInfo";
import { useBreakpointValue } from "@chakra-ui/react";
import {UserMenu} from "@components/ui";
import PersonalInfoCard
  from "@containers/app/settings/personalInfo/PersonalInfoCard";
import React, {useState} from "react";
import {NotificationPopover} from "@components/customer/ui/notification-popover";
import {CalendarPopover} from "@components/customer/ui/calendar-popover";
import PaymentsPayouts from "@containers/app/settings/paymentPayout/PaymentsPayouts";
import PaymentsPayoutsCard from "@containers/app/settings/paymentPayout/PaymentsPayoutsCard";



export const Settings = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isActive, setIsActive] = useState("Personal info");

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      {isMobile ? (
        <Flex
          justify="space-between"
          align="center"
          px="4"
          py="3"
          bg="white"
          position="sticky"
          top="0"
          zIndex="1000"
          borderBottom={{ base: "1px solid #E5E5E5", lg: "none" }}
        >
          <HStack spacing="3">
            <Icon as={Menu} boxSize="24px" color="black" cursor="pointer" />
              <Image src="/img/logo.svg" alt="Vaultyfy logo" height="32px" />
          </HStack>
          <UserMenu />
        </Flex>
      ) : (
        <Box px={{ base: "1rem", lg: "2rem" }} mt={{ base: "1rem", lg: "2rem" }}>
          <Flex justifyContent="space-between" alignItems="center" mb={{ base: "1rem", lg: "1.5rem" }}>
            <Text as="h2" fontSize={{ base: "24px", lg: "32px" }}>Settings</Text>
            <Flex columnGap="1rem" alignItems="center" display={{ base: "none", lg: "flex" }}>
              <Button
                bgColor="var(--button-secondary-lighten)"
                width="180px"
                height="52px"
                rounded="8px"
                px="9px"
                py="13px"
                leftIcon={<CirclePlus color="#292d32" size="24" />}
                fontWeight="medium"
                fontSize="14px"
                _hover="var(--button-secondary)"
                _focus="var(--button-secondary)"
              >
                Create group
              </Button>
              <HStack columnGap="1rem">
                <CalendarPopover />
                <NotificationPopover />
              </HStack>
            </Flex>
          </Flex>
        </Box>
      )}

      <Flex flex="1" flexDirection="row" overflowY="auto" px={{ base: "1rem", lg: "2rem" }}>
        <Flex flexDirection="column" gap="1rem">
          <PersonalInfo onClick={setIsActive} isActive={isActive === "Personal info"}/>
          <PaymentsPayouts onClick={setIsActive} isActive={isActive === "Payments Payout"} />
        </Flex>
        <Box flex="1">
          {isActive  ==="Personal info" && <PersonalInfoCard />}
          {isActive === "Payments Payout" && <PaymentsPayoutsCard />}
        </Box>
      </Flex>
    </Box>
  );
};
