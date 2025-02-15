import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { CirclePlus } from "lucide-react";
import { CalendarPopover, NotificationPopover } from "@components/customer/ui";
import PersonalInfo from "@containers/app/settings/personalInfo/PersonalInfo";
import PaymentsPayouts from "@containers/app/settings/paymentPayout/PaymentsPayouts";
import LoginSecurity from "@containers/app/settings/loginSecurity/LoginSecurity";
import HelpSupport from "@containers/app/settings/HelpSupport";

export const Settings = () => {
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="column">
      <Box
        position="sticky"
        top="0"
        bg="white"
        zIndex="10"
        px={{ base: "1rem", lg: "1rem" }}
        py="2.5rem"
      >
        <Flex justifyContent="space-between" mb="1.5rem">
          <Text as="h2" fontSize="32px">Settings</Text>
          <Flex columnGap="1rem" alignItems="center">
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

      <Box flex="1" overflowY="auto" px="1rem">
        <PersonalInfo />
        <PaymentsPayouts />
        <LoginSecurity />
        <HelpSupport />
      </Box>
    </Box>
  );
};
