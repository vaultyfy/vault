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
  Stack,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { BankInfoSkeleton } from "@components/skeletons";
import { useToastContext } from "@hooks/context";
import { useMyBanks } from "@hooks/swr";
import { AccountInfoModal } from "@layouts/modal-layout/account-info";
import { deleteBank } from "@mutations/banks";
import { State } from "@utils/constants";
import { UserBankAccount } from "@utils/types";
import { PencilLine, PlusCircle, Trash2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import React from "react";
import { useUiComponentStore } from "@store/ui";
import { SettingsHeader } from "./settings-header";

export const PaymentsPayouts = () => {
  const navigate = useNavigate();
  const { openToast } = useToastContext();
  const { data: userBanks, mutate, isLoading } = useMyBanks();
  const [state, setState] = React.useState<State>("idle");
  const [selectedBank, setSelectedBank] = React.useState<
    UserBankAccount | undefined
  >();
  const { onClose, isOpen, onOpen } = useDisclosure();

  const removePaymentMethod = async (id: string) => {
    const foundBank = userBanks?.find((bank) => bank?.bankID === id);
    try {
      setState("deleting");
      setSelectedBank(foundBank);

      const request = await deleteBank(id);
      if (request?.ok) {
        openToast("Bank deleted successfully!", "success");
        mutate();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setState("idle");
      setSelectedBank(undefined);
    }
  };

  const editBankInfo = (id: string) => {
    const foundBank = userBanks?.find((bank) => bank?.bankID === id);
    if (!foundBank) return;
    setSelectedBank(foundBank);
    onOpen();
  };

  const handleNavigation = () => {
    navigate({ to: "/dashboard/settings" });
  };

  return (
    <>
      <Box
        width={{ lg: "482px", md: "100%" }}
        height={{ lg: "100%", md: "100vh", base: "100vh" }}>
        <SettingsHeader
          title="Payment & Payouts"
          handleNavigation={handleNavigation}
        />

        {isLoading ? (
          <Stack direction="column" gap=".8em">
            {Array.from({ length: 2 }).map((_, index) => {
              return <BankInfoSkeleton key={index} />;
            })}
          </Stack>
        ) : (
          <>
            {userBanks && userBanks?.length > 0 ? (
              <VStack spacing={4} align="stretch">
                {userBanks?.map((bank, index) => (
                  <Box
                    key={`${index}${bank.bankID}`}
                    border="1px solid var(--outline)"
                    borderRadius="8px"
                    p={4}
                    bg="white"
                    boxShadow="sm">
                    <Flex justifySelf="flex-end" gap=".8em">
                      <HStack
                        _hover={{
                          cursor: "pointer",
                        }}
                        gap=".2em"
                        justifySelf="flex-end"
                        alignItems="center"
                        onClick={() => editBankInfo(bank.bankID)}>
                        <PencilLine size="18" color="var(--main)" />
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="var(--main)"
                          pt=".125em">
                          Edit
                        </Text>
                      </HStack>

                      <HStack
                        gap=".1em"
                        justifySelf="flex-end"
                        alignItems="center"
                        _hover={{
                          cursor: "pointer",
                        }}
                        onClick={() => removePaymentMethod(bank.bankID)}>
                        {state === "deleting" &&
                        selectedBank?.bankID === bank.bankID ? (
                          <Spinner size="xs" color="var(--grey)" />
                        ) : (
                          <Trash2 size="18" color="var(--main)" />
                        )}
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="var(--main)"
                          pt=".18em">
                          {state === "deleting" && selectedBank?.id === bank.id
                            ? "Removing..."
                            : "Remove"}
                        </Text>
                      </HStack>
                    </Flex>

                    <Box py={3}>
                      <Stack direction="column">
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="var(--grey)">
                          Account name
                        </Text>
                        <Text
                          fontSize="18px"
                          fontWeight="400"
                          color="var(--dark)">
                          {bank.accountName}
                        </Text>
                      </Stack>
                      <Divider my={2} />
                      <Stack direction="column">
                        <Text
                          fontSize="14px"
                          fontWeight="400"
                          color="var(--grey)">
                          Bank account number
                        </Text>
                        <Text
                          fontSize="18px"
                          fontWeight="400"
                          color="var(--dark)">
                          {bank.accountNumber}
                        </Text>
                      </Stack>
                      <Divider my={2} />
                      <Stack direction="column">
                        <Text
                          fontSize="14px"
                          color="var(--grey)"
                          fontWeight="400">
                          Bank name
                        </Text>
                        <Text
                          fontSize="18px"
                          fontWeight="400"
                          color="var(--dark)">
                          {bank.bankName}
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text textAlign="left" color="var(--grey)" fontSize="14px">
                You have not added any payment method. Click the button below to
                get started
              </Text>
            )}

            <Button
              mt="1em"
              leftIcon={<PlusCircle size={18} />}
              background="var(--grey-100)"
              color="var(--text-gray-200)"
              borderRadius="30px"
              variant="outline"
              fontWeight="400"
              onClick={onOpen}
              _hover={{
                background: "var(--grey-100)",
              }}>
              Add payment method
            </Button>
          </>
        )}
      </Box>

      <AccountInfoModal
        isOpen={isOpen}
        onClose={onClose}
        accountInfo={selectedBank}
      />
    </>
  );
};
