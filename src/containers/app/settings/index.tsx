import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { CirclePlus } from "lucide-react";
import { CalendarPopover, NotificationPopover, OverviewCard } from "@components/customer/ui";
import { useState } from "react";

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);


  return (
    <>
    <Box
      width={{ base: "100%", xl: "100%" }}
      minH="100dvh"
      px={{ base: "1rem", lg: "1rem" }}
      pr={{ lg: "1.5rem" }}
      py={"2.5rem"}
    >

      <Flex justifyContent="space-between" mb="1.5rem" display={{ base: "none", lg: "flex" }}>
        <Text as="h2" fontFamily="var(--clash-grotesk-500)" fontSize="32px">
          Welcome back{" "}
          <Text
            as="span"
            sx={{
              background: "var(--main-gradient)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            fontFamily="var(--clash-grotesk-600)"
          >
            Akinlolu
          </Text>
        </Text>
        <Flex columnGap="1rem" alignItems="center">
          <Button
            bgColor="var(--button-secondary-lighten)"
            width="180px"
            height="52px"
            rounded="8px"
            px="9px"
            py="13px"
            leftIcon={<CirclePlus color="#292d32" size="24" />}
            fontFamily="var(--poppins)"
            fontWeight="medium"
            fontSize="14px"
            _hover="var(--button-secondary)"
            _focus="var(--button-secondary)"
            onClick={() => setIsOpen(true)}
          >
            Create group
          </Button>

          <HStack columnGap="1rem">
            <CalendarPopover />
            <NotificationPopover />
          </HStack>
        </Flex>
      </Flex>

      {/* Overview Cards Section */}
      <Flex
        gap="10px"
        flexWrap="wrap"
        mt="1rem"
        justifyContent="space-between"
      >
        <Box flex="1" minWidth="230px">
          <OverviewCard
            cardIcon="calendar"
            cardTitle="Wallet balance"
            amount="800"
            paidDate="23-12-2025"
            cardGradient="var(--main-gradient)"
          />
        </Box>
        <Box flex="1" minWidth="230px">
          <OverviewCard
            cardIcon="time-is-money"
            cardTitle="Remaining Contribution"
            amount="000"
            hasFilter
            hasProgress
            progressLevel={25}
            progressColor="var(--main-gradient)"
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
          />
        </Box>
        <Box flex="1" minWidth="230px">
          <OverviewCard
            cardIcon="piggy-bank"
            cardTitle="Total expected return"
            amount="000"
            hasFilter
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
          />
        </Box>
        <Box flex="1" minWidth="230px">
          <OverviewCard
            cardIcon="trophy"
            cardTitle="Rewards & milestones"
            hasFilter
            hasProgress
            progressLevel={40}
            progressColor="var(--main-gradient)"
            iconBg="var(--overview-card-secondary)"
            bgColor="var(--main)"
            cycle={1}
          />
        </Box>
      </Flex>

      <Flex justifyContent="center" mt="10rem">
        <Text fontSize="18px" fontWeight="600" color="gray.500">
          Start your savings journey
        </Text>
      </Flex>
    </Box>
    </>
  );
};
