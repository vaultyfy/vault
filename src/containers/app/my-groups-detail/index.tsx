import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import { PaymentCard, Calendar } from "@components/customer/ui";
import { Icon } from "@components/icon";

export const MyGroupDetails = () => {
  return (
    <VStack spacing="10px" width="full">
      <HStack justifyContent="flex-start" width="full">
        <Icon name="arrow-left" />
        <Text
          fontFamily="var(--clash-grotesk-500)"
          fontWeight="500"
          fontSize="20px"
          color="var(--text-1)"
        >
          Unity savers
        </Text>
      </HStack>
      <VStack width="full" spacing="2px">
        <Box
          width="full"
          roundedTop="10px"
          p="1rem"
          border="0.5px solid #8181816B"
        >
          <Calendar />
        </Box>
        <Box maxHeight="127px" width="full">
          <PaymentCard
            deadlineDate="23-December-2025"
            dateType="Start date"
            amount={200000}
            isActive
          />
        </Box>
        <Box maxHeight="127px" width="full">
          <PaymentCard deadlineDate="24-December-2025" dateType="Missed date" />
        </Box>
        <Box maxHeight="127px" width="full">
          <PaymentCard deadlineDate="24-December-2025" dateType="Missed date" />
        </Box>
      </VStack>
    </VStack>
  );
};
