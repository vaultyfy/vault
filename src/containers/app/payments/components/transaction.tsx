import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { formatPrice } from "@utils/misc";
import { Transaction as Trans } from "@utils/types";

type TransactionProps = {
  transaction: Trans;
};

const getTransactionType = (type: Trans["type"]) => {
  switch (type) {
    case "Credit":
      return "Credit";
    case "loan":
      return "Loan";
    case "thrift":
      return "Thrif Pay-out";
    case "withdrawal":
      return "Withdrawal";
  }
};
export const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <Box
      py="1em"
      height="104px"
      alignItems="center"
      borderRadius="10px"
      display="flex"
      justifyContent="space-between"
      px="1.4em"
      border="1px solid var(--border-muted)">
      <Stack direction="column">
        <Text color="var(--grey)" fontWeight="400" fontSize="14px">
          {getTransactionType(transaction.type)}
        </Text>
        <Text fontSize="20px" fontWeight="500" color="var(--main)">
          {formatPrice(transaction.amount)}
        </Text>
      </Stack>
      <HStack gap="1em">
        <Stack direction="column" textAlign="right" fontWeight="400">
          <Text fontSize="14px" color="var(--grey)">
            Unity Savers
          </Text>
          <Text fontWeight="400" fontSize="18px" color="var(--dark)">
            24 Nov, 2025
          </Text>
        </Stack>
        <Icon name="import" />
      </HStack>
    </Box>
  );
};
