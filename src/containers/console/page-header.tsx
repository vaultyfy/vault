import { Stack, Text, Button, HStack } from "@chakra-ui/react";
import { BellDot, CirclePlus } from "lucide-react";

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      height={"52px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text
        fontSize="34px"
        height={"100%"}
        color="var(--dark)"
        lineHeight="41.82px"
        fontWeight="500"
      >
        {title}
      </Text>
      <HStack>
        {/* <Button
          bg="#1CCFBD12"
          borderRadius={"36px"}
          pl="31px"
          paddingY={"13px"}
          pr="4px"
          gap={"8px"}
          height="52px"
          _hover={{ background: "#1CCFBD12" }}
          width={"180px"}
        >
          Create Group <CirclePlus fill="var(--dark)" color="white" size="45" />
        </Button> */}
        <Button
          bg="#1CCFBD12"
          borderRadius={"full"}
          height="50px"
          width={"50px"}
          _hover={{ background: "#1CCFBD12" }}
        >
          <BellDot fill="var(--dark)" color="white" size="50" width={"100%"} />
        </Button>
      </HStack>
    </Stack>
  );
};
