import { ModalLayout } from "@components/ui";
import { BaseModalProps } from "@utils/constants";
import { InputField, SelectField } from "@components/form";
import { UserBankAccount } from "@utils/types";
import { Formik, Form } from "formik";
import { Text, Button, Image, Box } from "@chakra-ui/react";
import { addBank, updateBankInfo } from "@mutations/banks";
import { useToastContext } from "@hooks/context";
import { useBanks, useMyBanks } from "@hooks/swr";

interface AccountInfoModalProps extends BaseModalProps {
  accountInfo?: UserBankAccount;
}

export const AccountInfoModal = ({
  isOpen,
  onClose,
  accountInfo,
}: AccountInfoModalProps) => {
  const { openToast } = useToastContext();
  const { data: banks } = useBanks();
  const { mutate } = useMyBanks();

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

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Add bank info"
      size="md"
    >
      <Formik
        initialValues={{
          accountName: accountInfo?.accountName || "",
          accountNumber: accountInfo?.accountNumber || "",
          bankName: accountInfo?.bankName || "",
        }}
        onSubmit={async (values) => {
          try {
            const request = accountInfo
              ? await updateBankInfo(accountInfo?.bankID, {
                  ...values,
                })
              : await addBank(values);

            const response = await request?.json();
            if (request?.ok) {
              mutate();
              onClose();
              openToast(response?.message, "success");
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {(formik) => (
          <Box mt="-1.4em" mb="1em">
            <Form>
              {Object.keys(formik.values)
                .slice(0, 2)
                .map((field, index) => {
                  return (
                    <InputField
                      key={index}
                      label={
                        field === "accountName"
                          ? "Account name"
                          : "Bank account number"
                      }
                      name={field}
                      type="text"
                      placeholder={
                        field === "accountName"
                          ? "Account name"
                          : "Enter account number"
                      }
                    />
                  );
                })}

              <Box py={1}>
                <Text fontSize="14px" fontWeight="400" color="var(--grey)">
                  Bank name
                </Text>

                <SelectField
                  name="bankName"
                  options={bankList}
                  menuWidth="100%"
                  height="55px"
                  outlineColor="var(--outline)"
                  placeholder={formik.values.bankName || bankList?.[0]?.label}
                  fontSize="18px"
                  fontWeight="400"
                  customCaret
                />
              </Box>

              <Button
                mt="1.4em"
                type="submit"
                bg="var(--main)"
                color="var(--white-fade)"
                borderRadius="36px"
                fontWeight="400"
                _hover={{ bg: "var(--main)" }}
                isLoading={formik.isSubmitting}
              >
                {accountInfo ? "Save settings" : "Add bank"}
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </ModalLayout>
  );
};
