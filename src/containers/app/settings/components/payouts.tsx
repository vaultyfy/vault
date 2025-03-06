import {
  Box,
  Text,
  Flex,
  Button,
  VStack,
  Divider,
  Image,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { SelectField } from "@components/form";
import { Icon } from "@components/icon";
import { useToastContext } from "@hooks/context";
import { useBanks, useMyBanks } from "@hooks/swr";
import { addBank, deleteBank } from "@mutations/banks";
import { State } from "@utils/constants";
import { BankInfo, UserBankAccount } from "@utils/types";
import { Form, Formik, useFormik } from "formik";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

interface PaymentData {
  id: number;
  accountName: string;
  accountNumber: string;
  bankName: string;
}

export const PaymentsPayouts = () => {
  const { openToast } = useToastContext();
  const { data: banks } = useBanks();
  const { data: userBanks } = useMyBanks();
  const [state, setState] = React.useState<State>("idle");
  const [selectedBank, setSelectedBank] =
    React.useState<UserBankAccount | null>();

  const [editModes, setEditModes] = React.useState<Record<string, boolean>>({
    accountName: false,
    accountNumber: false,
  });

  const bankList = banks.map((bank) => ({
    label: bank.name,
    value: bank.name,
    code: bank.code,
    icon: (
      <Image
        src={bank.logo}
        boxSize="20px"
        alt={bank.name}
        borderRadius="6px"
      />
    ),
  }));

  const removePaymentMethod = async (id: number) => {
    const foundBank = userBanks?.find((bank) => bank?.id === id);
    try {
      setState("loading");
      setSelectedBank(foundBank);

      const request = await deleteBank(id);
      if (request?.ok) {
        openToast("Bank deleted successfully!", "success");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setState("idle");
      setSelectedBank(null);
    }
  };

  const toggleEdit = (field: keyof typeof editModes) =>
    setEditModes((prev) => ({ ...prev, [field]: !prev[field] }));

  return (
    <Box width="482px">
      <Text fontSize="24px" fontWeight="400" mb={4} color="var(--dark)">
        Payment & Payouts
      </Text>

      <Formik
        initialValues={{
          accountName: "",
          accountNumber: "",
          bankName: "",
        }}
        onSubmit={async (values) => {
          try {
            const request = await addBank(values);
            setEditModes({
              accountName: false,
              accountNumber: false,
            });

            const response = await request?.json();

            if (request?.ok) {
              openToast(response?.message, "success");
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {(formik) => (
          <Form>
            <VStack spacing={4} align="stretch">
              {userBanks?.map((bank) => (
                <Box
                  key={bank.id}
                  border="1px solid #E2E8F0"
                  borderRadius="8px"
                  p={4}
                  bg="white"
                  boxShadow="sm"
                >
                  <Flex justify="flex-end" align="center" mb={4}>
                    <Flex
                      align="center"
                      gap={1}
                      onClick={() => removePaymentMethod(bank.id)}
                    >
                      {state === "deleting" && selectedBank?.id === bank.id ? (
                        <Spinner size="sm" color="var(--grey-100)" />
                      ) : (
                        <Icon name="remove" />
                      )}
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color="#102634"
                        cursor="pointer"
                      >
                        {state === "deleting" && selectedBank?.id === bank.id
                          ? "Removing..."
                          : "Remove"}
                      </Text>
                    </Flex>
                  </Flex>

                  {Object.keys(formik.values)
                    .slice(0, 2)
                    .map((field, index) => {
                      return (
                        <Box py={3} key={index}>
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="var(--grey)"
                          >
                            {field === "accountName"
                              ? "Account name"
                              : "Bank account number"}
                          </Text>

                          <Flex justify="space-between" align="center">
                            {editModes[field] ? (
                              <Input
                                type="text"
                                variant="unstyled"
                                name={field}
                                height="45px"
                                py=".6em"
                                onChange={formik.handleChange}
                                value={formik.values[field as keyof BankInfo]}
                              />
                            ) : (
                              <Text
                                fontSize="18px"
                                fontWeight="400"
                                color="var(--dark)"
                              >
                                {formik.values[field as keyof BankInfo]}
                              </Text>
                            )}
                            <Button
                              _hover={{
                                background: "none",
                                bgGradient: "var(--main-gradient)",
                                bgClip: "text",
                              }}
                              bgGradient="var(--main-gradient)"
                              bgClip="text"
                              fontWeight="400"
                              onClick={() =>
                                toggleEdit(field as keyof BankInfo)
                              }
                            >
                              Edit
                            </Button>
                          </Flex>

                          <Divider my={2} />
                        </Box>
                      );
                    })}

                  <Box py={3}>
                    <Text fontSize="14px" fontWeight="400" color="var(--grey)">
                      Bank name
                    </Text>

                    <SelectField
                      name="bankName"
                      options={bankList}
                      menuWidth="100%"
                      noBorder
                      defaultValue={bankList[0]}
                      fontSize="18px"
                      fontWeight="400"
                      customCaret
                    />
                  </Box>
                </Box>
              ))}
            </VStack>

            <Flex justify="space-between" mt={6}>
              <Button
                leftIcon={<PlusCircle size={18} />}
                background="var(--grey-100)"
                color="var(--text-gray-200)"
                borderRadius="30px"
                variant="outline"
                fontWeight="400"
                onClick={() => console.log("Hey")}
                _hover={{
                  background: "var(--grey-100)",
                }}
              >
                Add payment method
              </Button>
              <Button
                type="submit"
                bg="var(--main)"
                color="var(--white-fade)"
                borderRadius="36px"
                fontWeight="400"
                _hover={{ bg: "var(--main)" }}
                isLoading={formik.isSubmitting}
              >
                Save settings
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
