import {
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InputField, Option, SelectField } from "@components/form";
import { ModalLayout } from "@components/ui";
import { useToastContext } from "@hooks/context";
import { useBanks, useMyBanks } from "@hooks/swr";
import { withdrawFunds } from "@mutations/banks";
import { BaseModalProps } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import { Response } from "@utils/types";
import { schema } from "@utils/validators";
import { Form, Formik } from "formik";
import React from "react";

interface WithdrawalModalProps extends BaseModalProps {
  balance: number;
}

const AMOUNTS_TO_WITHDRAW = [5000, 50000, 100000, 200000].map((value) => ({
  amount: value,
  id: crypto.randomUUID(),
}));

export const WithdrawalModal = ({
  isOpen,
  onClose,
  balance,
}: WithdrawalModalProps) => {
  const [defaultWithdrawalAmount, setDefaultWithdrawalAmount] = React.useState<
    (typeof AMOUNTS_TO_WITHDRAW)[0]
  >(AMOUNTS_TO_WITHDRAW?.[0]);
  const [consent, setConsent] = React.useState<boolean>(false);
  const formikRef = React.useRef(null);
  const { data: myBanks } = useMyBanks();
  const { data: banks } = useBanks();
  const [selectedBank, setSelectedBank] = React.useState<Option>()
  const { openToast } = useToastContext();

  const bankCodesMap: Record<string, string> = {};
  banks.forEach((bank) => {
    bankCodesMap[bank.name] = bank.code;
  });

  console.log("bankCodesMap", bankCodesMap)

  const customersBanks = myBanks?.map((bank) => ({
    value: bank.bankName,
    label: `${bank.bankName} (${bank.accountNumber})`,
    accountName: bank.accountName,
    accountNumber: bank.accountNumber,
    code: bankCodesMap[bank.bankName],
    icon: (
      <Image
        src={banks?.find((b) => b.name === bank.bankName)?.logo || ""}
        boxSize="20px"
        alt={bank.bankName}
        borderRadius="6px"
      />
    ),
  }));

  React.useEffect(() => {
    if (formikRef.current) {
      // we can safely ignore this
      // @ts-ignore
      formikRef.current.setFieldValue("amount", defaultWithdrawalAmount.amount);
    }
  }, [defaultWithdrawalAmount]);

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} size="lg" px=".6em" py="1em">
      <Stack direction="column">
        <Text fontSize="14px" fontWeight="500">
          Wallet Balance
        </Text>
        <Text fontSize="34px" fontFamily="var(--clash-grotesk-600)">
          {formatPrice(balance || 0)}
        </Text>
      </Stack>

      <Stack direction="column" gap=".4em">
        <Text fontSize="12px" color="var(--grey)">
          Enter amount to withdraw
        </Text>
        <HStack>
          {AMOUNTS_TO_WITHDRAW.map((item) => {
            return (
              <Button
                backdropFilter="blur(24px)"
                boxShadow="0px 2px 6px 0px #00000014"
                background={
                  defaultWithdrawalAmount.amount === item.amount
                    ? "var(--main)"
                    : "var(--progress-accent-bg)"
                }
                color={
                  defaultWithdrawalAmount.amount === item.amount
                    ? "#fff"
                    : "var(--main)"
                }
                key={item.id}
                fontWeight="500"
                fontSize="12px"
                borderRadius="18px"
                height="35px"
                _hover={{
                  background:
                    defaultWithdrawalAmount.amount === item.amount
                      ? "var(--main)"
                      : "var(--progress-accent-bg)",
                }}
                onClick={() => setDefaultWithdrawalAmount(item)}
              >
                {formatPrice(item.amount)}
              </Button>
            );
          })}
        </HStack>
      </Stack>

      <Formik
        innerRef={formikRef}
        initialValues={{
          amount: defaultWithdrawalAmount.amount || 0,
          accountName: "",
        }}
        validationSchema={schema.withdrawal}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            const request = await withdrawFunds({
              amount: values.amount,
              accountName: selectedBank?.accountName || "",
              accountNumber: selectedBank?.accountNumber || "",
              bankCode: selectedBank?.code || ""
            })
            const response:Response = await request?.json()
            if (request?.ok) {
              openToast(response.message, "success")
              onClose();
            } else {
              openToast(response.message, "error")
            }
            setSubmitting(false);
          }, 600);
        }}
      >
        {(formik) => {
          return (
            <Form>
              <InputField
                name="amount"
                label=""
                // placeholder={String(defaultWithdrawalAmount.amount)}
              />
              <Divider />
              <Box mt="1.4em">
                <SelectField
                  name="accountName"
                  options={customersBanks as Option[]}
                  outlineColor="var(--outline)"
                  height="55px"
                  placeholder={customersBanks?.[0].value}
                  fontSize="16px"
                  fontWeight="400"
                  menuWidth="100%"
                  onChange={(option) => setSelectedBank(option)}
                />
              </Box>

              <Box
                bgGradient="var(--main-gradient)"
                mt="1em"
                borderRadius="10px"
                py=".3em"
                px=".3em"
              >
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  color="var(--white-fade)"
                >
                  Withdrawal process may take up to 2hrs, depending on your bank
                  network. if you did not receive your funds in 2hrs kindly
                  reach out to your bank. Thank you.
                </Text>
              </Box>
              <Divider color="red" mt="1.2em" />
              <HStack gap=".8em" mt="1.4em">
                <Box mt="-1.8em">
                  <Checkbox
                    colorScheme="whiteAlpha"
                    iconColor="#292D32"
                    borderColor="#292D32"
                    bg="transparent"
                    sx={{
                      ".chakra-checkbox__control": {
                        border: "2px solid #292D32",
                        borderRadius: "6px",
                        width: "20px",
                        height: "20px",
                        background: "transparent",
                      },
                      ".chakra-checkbox__control[data-checked]": {
                        bg: "transparent",
                        borderColor: "#292D32",
                      },
                      ".chakra-checkbox__control[data-checked] svg": {
                        stroke: "#292D32",
                        width: "12px",
                        height: "12px",
                      },
                      ".chakra-checkbox__label": {
                        color: "#292D32",
                        fontSize: "12.5px",
                        fontWeight: "normal",
                        fontFamily: "var(--open-sans)",
                      },
                    }}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                </Box>

                <Text fontSize="13px" color="#555555">
                  A 5% insurance fee is deducted to protect you from potential
                  setbacks. If you're unable to complete your thrift for any
                  reason, this ensures a hassle-free exit.
                </Text>
              </HStack>

              <HStack
                mt=".8em"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="column" gap="1em">
                  <Text fontSize="13px" color="var(--grey)" mt=".8em">
                    After 5% charges deductions, you'll receive:
                  </Text>
                  <Text fontWeight="700" color="var(--main)" fontSize="28px">
                    {formatPrice(formik.values.amount * 0.95)}
                  </Text>
                </Stack>
                <Button
                  background="var(--main)"
                  color="#fff"
                  _hover={{
                    background: "var(--main)",
                  }}
                  height="49px"
                  width="137px"
                  fontWeight="500"
                  fontSize="14px"
                  borderRadius="36px"
                  disabled={!consent}
                  _disabled={{
                    background: "var(--outline)",
                    cursor: "not-allowed",
                  }}
                  isLoading={formik.isSubmitting}
                  type="submit"
                >
                  Withdraw
                </Button>
              </HStack>
            </Form>
          );
        }}
      </Formik>
    </ModalLayout>
  );
};
