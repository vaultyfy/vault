import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  VStack,
  Divider, Image,
} from "@chakra-ui/react";
import {PlusCircle} from "lucide-react";

interface PaymentData {
  id: number;
  accountName: string;
  accountNumber: string;
  bankName: string;
}

const PaymentsPayoutsCard = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentData[]>([
    {
      id: 1,
      accountName: "Akinlolu Daniel",
      accountNumber: "0233850785",
      bankName: "GT Bank",
    },
  ]);

  // Handle removing a payment method
  const removePaymentMethod = (id: number) => {
    setPaymentMethods((prev) => prev.filter((payment) => payment.id !== id));
  };

  // Handle updating bank name
  const updateBankName = (id: number, newBank: string) => {
    setPaymentMethods((prev) =>
      prev.map((payment) =>
        payment.id === id ? { ...payment, bankName: newBank } : payment
      )
    );
  };

  // Handle adding a new payment method
  const addPaymentMethod = () => {
    setPaymentMethods((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        accountName: "New Account",
        accountNumber: "0000000000",
        bankName: "Select Bank",
      },
    ]);
  };

  return (
    <Box width="482px">
      <Text fontSize="24px" fontWeight="400" mb={4} color={"#1C1C1C"}>
        Payment & Payouts
      </Text>

      <VStack spacing={4} align="stretch">
        {paymentMethods.map((payment) => (
          <Box
            key={payment.id}
            border="1px solid #E2E8F0"
            borderRadius="8px"
            p={4}
            bg="white"
            boxShadow="sm"
          >

            <Flex justify="flex-end" align="center" mb={4}>
              <Flex align="center" gap={1}>
                <Image
                  src="/img/remove.svg"
                  alt="remove"
                  width="20.68px"
                  onClick={() => removePaymentMethod(payment.id)}
                />
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  color={"#102634"}
                  cursor="pointer"
                  onClick={() => removePaymentMethod(payment.id)}
                >
                  Remove
                </Text>
              </Flex>
            </Flex>

            <Box py={3}>
              <Text fontSize="14px" fontWeight="400" color="#818181">
                Account name
              </Text>
              <Flex justify="space-between" align="center">
                <Text fontSize="18px" fontWeight="400" color={"#1C1C1C"}>
                  {payment.accountName}
                </Text>
                <Button variant="link" size="sm" color="#1CCFBD">
                  Edit
                </Button>
              </Flex>
            </Box>

            <Divider my={2} />

            <Box py={3}>
              <Text fontSize="14px" fontWeight="400" color="#818181">
                Bank account number
              </Text>
              <Flex justify="space-between" align="center">
                <Text fontSize="18px" fontWeight="400" color={"#1C1C1C"}>
                  {payment.accountNumber}
                </Text>
                <Button variant="link" size="sm" color="#1CCFBD">
                  Edit
                </Button>
              </Flex>
            </Box>

            <Divider my={2} />

            {/* Bank Name Dropdown */}
            <Box py={3}>
              <Text fontSize="14px" fontWeight="400" color="#818181">
                Bank name
              </Text>
              <Flex justify="space-between" align="center" cursor="pointer">
                <Text fontSize="18px" fontWeight="bold" color={"#1C1C1C"}>
                  {payment.bankName}
                </Text>
                <Image
                  src="/img/cheveron-toggle.svg"
                  alt="chevevron"
                  width="18.03px"
                  height={"10.91px"}
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </VStack>

      {/* Add Payment Method & Save Button */}
      <Flex justify="space-between" mt={6}>
        <Button
          leftIcon={<PlusCircle size={18} />}
          background={'#F6F6F6'}
          color={'#04040499'}
          borderRadius={'30px'}
          variant="outline"
          onClick={addPaymentMethod}
        >
          Add payment method
        </Button>
        <Button
          bg="#102634"
          color={'#FDFFF7'}
          borderRadius="36px"
          _hover={{ bg: "#102634" }}
          _active={{ bg: "#102634" }}
          _focus={{ boxShadow: "none" }}
        >
          Save settings
        </Button>
      </Flex>
    </Box>
  );
};

export default PaymentsPayoutsCard;
