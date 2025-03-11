import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import {
  LoginSecurityCard,
  SettingCard,
  PaymentsPayouts,
  PersonalInfo,
} from "./components";
import HelpSupportCard from "@containers/app/settings/components/help-support";
import { useNavigate } from "@tanstack/react-router";

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
  {
    id: crypto.randomUUID(),
    title: "Login & security",
    iconName: "login-security",
    description: "Update your password and secure your account",
    component: <LoginSecurityCard />,
  },
  {
    id: crypto.randomUUID(),
    title: "Help & Support",
    iconName: "support",
    description:
      "Contact our support and learn more about our terms of services",
    component: <HelpSupportCard />,
  },
];

export const Settings = () => {
  const [activeSetting, setActiveSetting] = React.useState<Setting>(
    SETTINGS[0],
  );
  const navigate = useNavigate();

  const handleSelectedSetting = (id: string) => {
    const found = SETTINGS.find((setting) => setting.id === id);
    if (!found) return;

    if (found.title === "Help & Support") {
      navigate({ to: "/help-support" });
    } else {
      setActiveSetting(found);
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      overflowY="auto"
      flexWrap="wrap"
      gap={{ xl: "1em", lg: ".6em", md: ".6em", base: "1em" }}
      px={{ xl: "1em", base: ".4rem", lg: ".2rem" }}
    >
      <Stack
        direction="column"
        gap="1em"
        width={{ lg: "48%", md: "48%", base: "100%" }}
      >
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
      <Box width={{ lg: "50%", base: "100%", md: "50%" }}>
        {activeSetting.component}
      </Box>
    </Flex>
  );
};
