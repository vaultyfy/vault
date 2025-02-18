import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Image,
  Stack,
} from "@chakra-ui/react";
import { CirclePlus, Menu } from "lucide-react";

import { useBreakpointValue } from "@chakra-ui/react";
import { UserMenu } from "@components/ui";
import React, { useState } from "react";
import { NotificationPopover } from "@components/customer/ui/notification-popover";
import { CalendarPopover } from "@components/customer/ui/calendar-popover";
import { SettingCard, PaymentsPayouts, PersonalInfo } from "./components";

export type Setting = {
  id: string;
  iconName: string;
  title: string;
  description: string;
  component: React.ReactNode;
};

const SETTINGS: Setting[] = [
  {
    id: crypto.randomUUID(),
    title: "personal info",
    iconName: "person-edit",
    description: "Provide personal details for full verification",
    component: <PersonalInfo />,
  },
  {
    id: crypto.randomUUID(),
    title: "Payments & payouts",
    iconName: "payout",
    description: "Review payments, payouts, coupons and gift cards",
    component: <PaymentsPayouts />,
  },
];

export const Settings = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [activeSetting, setActiveSetting] = React.useState<Setting>(
    SETTINGS[0],
  );

  const handleSelectedSetting = (id: string) => {
    const found = SETTINGS.find((setting) => setting.id === id);
    if (!found) return;
    setActiveSetting(found);
  };

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
        <Box
          px={{ base: "1rem", lg: "2rem" }}
          mt={{ base: "1rem", lg: "2rem" }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={{ base: "1rem", lg: "1.5rem" }}
          >
            <Text as="h2" fontSize={{ base: "24px", lg: "32px" }}>
              Settings
            </Text>
            <Flex
              columnGap="1rem"
              alignItems="center"
              display={{ base: "none", lg: "flex" }}
            >
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

      <Flex
        justifyContent="space-between"
        gap="1em"
        overflowY="auto"
        px={{ base: "1rem", lg: "2rem" }}
      >
        <Stack direction="column" gap="1em">
          {SETTINGS.map((setting) => {
            const currentSetting = activeSetting.id === setting.id;

            return (
              <SettingCard
                id={setting.id}
                key={setting.id}
                title={setting.title}
                isActive={currentSetting}
                description={setting.description}
                iconName={setting.iconName}
                onClick={() => handleSelectedSetting(setting.id)}
              />
            );
          })}
        </Stack>
        <Box flex="1">{activeSetting.component}</Box>
      </Flex>
    </Box>
  );
};
