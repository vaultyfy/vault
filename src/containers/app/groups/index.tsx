import { Box, Flex, Text } from "@chakra-ui/react";
import { MyGroupCard, PaymentCard } from "@components/customer/ui";

export const Groups = () => {
  return (
    <Flex>
      <Box maxHeight="265px">
        <MyGroupCard bgColor="#F0FAFC" acceptanceStatus="pending_approval" />
      </Box>
      {/* <Box maxHeight="127px" w="427px">
        <PaymentCard deadlineDate="23-December-2025" dateType="Start date" />
      </Box> */}
    </Flex>
  );
};
