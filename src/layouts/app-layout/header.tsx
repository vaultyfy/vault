import { Flex, Text, Button, Box, HStack } from "@chakra-ui/react";
import { CalendarPopover, NotificationPopover } from "@components/customer/ui";
import { CirclePlus } from "lucide-react";
import { AppLayoutProps } from ".";

export const AppHeader = ({
  routeTitle,
}: Pick<AppLayoutProps, "routeTitle">) => {
  return (
    <Box mt={{ base: "1rem", lg: "2rem" }}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={{ base: "1rem", lg: "1.5rem" }}
      >
        <Text as="h2" fontSize={{ base: "24px", lg: "32px" }}>
          {routeTitle}
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
  );
};
