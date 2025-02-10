import { Box, Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  time: string;
}

export const NotificationContainer: React.FC<Props> = ({ children, time }) => {
  return (
    <Box
      p="1.5rem"
      w="full"
      shadow={"sm"}
      rounded="md"
      bg="white"
      border="1px solid var(--grey)"
    >
      <Box>{children}</Box>
      <Text
        fontFamily={"var(--open-sans)"}
        fontSize="12px"
        fontWeight={"600"}
        color={"#b4b4b4"}
        textAlign={"right"}
      >
        {time || "2.43pm"}
      </Text>
    </Box>
  );
};
