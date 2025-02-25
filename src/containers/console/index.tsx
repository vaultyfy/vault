import { Box, Text, Stack, Button, HStack, VStack } from "@chakra-ui/react";
import { OverviewCardSection } from "./overview";
import { BellDot, CirclePlus } from "lucide-react";
import { ActivitiesTable } from "./overview/activitiesTable";

export const AdminConsole = () => {
  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <Stack
        flexDirection={"row"}
        width={"100%"}
        height={"52px"}
        justifyContent={"space-between"}
      >
        <Text
          fontSize="34px"
          height={"100%"}
          color="var(--dark)"
          lineHeight="41.82px"
          fontWeight="500"
        >
          Dashboard
        </Text>
        <HStack>
          <Button
            bg="#1CCFBD12"
            borderRadius={"36px"}
            pl="31px"
            paddingY={"13px"}
            pr="4px"
            gap={"8px"}
            height="52px"
            _hover={{ background: "none" }}
            width={"180px"}
          >
            Create Group{" "}
            <CirclePlus fill="var(--dark)" color="white" size="45" />
          </Button>
          <Button
            bg="#1CCFBD12"
            borderRadius={"full"}
            height="50px"
            width={"50px"}
            _hover={{ background: "none" }}
          >
            <BellDot
              fill="var(--dark)"
              color="white"
              size="50"
              width={"100%"}
            />
          </Button>
        </HStack>
      </Stack>
      <OverviewCardSection />
      <ActivitiesTable />
    </VStack>
  );
};
