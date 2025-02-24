import { Box, Text, Stack, Button, HStack } from "@chakra-ui/react";
import { OverviewCardSection } from "./overview";
import { BellDot, CirclePlus } from "lucide-react";

export const AdminConsole = () => {
  return (
    <Box width={"100%"}>
      <Stack
        flexDirection={"row"}
        height={"52px"}
        display={"flex"}
        justifyContent={"space-between"}
        mb={"2em"}
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
    </Box>
  );
};
