import { Container } from "../container";
import {
  VStack,
  Text,
  Divider,
  Flex,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { InputField, SelectField } from "@components/form";
import { loanAmounts, paymentPlans, loanDurations } from "@utils/constants";
import { LoanApplicationFormValues } from "@utils/validators/loan-schema";
import { useFormikContext } from "formik";
import { useNavigate } from "@tanstack/react-router";
import { useLoanStepFlow } from "@hooks/context";
import { calculatePaybackAmount, formatWithCommas } from "@utils/misc";
import { format } from "path";

interface LoanPurposeProps {
  onClick: () => void;
}

export const LoanPurpose = ({ onClick }: LoanPurposeProps) => {
  const formik = useFormikContext<LoanApplicationFormValues>();
  const navigate = useNavigate();
  const { resetSteps } = useLoanStepFlow();

  const {
    loan_purpose,
    amount,
    loan_duration,
    payment_plan,
    payment_duration,
  } = formik.values;

  const calculateAndFormatPaybackAmount = () => {
    const loanAmount = parseInt(amount);
    const paymentPlan = payment_plan;
    const paymentDuration = payment_duration?.toString() || "";

    const paybackAmount = calculatePaybackAmount(
      loanAmount,
      paymentPlan,
      paymentDuration,
    );

    return formatWithCommas(paybackAmount.toString());
  };

  const handleNext = () => {
    if (loan_purpose !== "" && amount !== "" && loan_duration && payment_plan) {
      console.log("i got clicked");
      onClick();
    }
  };

  const handleBack = () => {
    resetSteps();
    navigate({ to: "/dashboard/loan-me" });
  };

  return (
    <Container>
      <VStack
        spacing="14px"
        width="100%"
        alignItems="flex-start"
        fontFamily="var(--poppins)"
      >
        <Text fontSize="20px" fontWeight="500" color="var(--main)">
          loan purpose & amount
        </Text>
        <InputField
          name="loan_purpose"
          label="Loan purpose"
          radius="6px"
          placeholder="Loan purpose"
          labelColor="var(--grey)"
          my="0"
        />
        <Divider width="full" backgroundColor="#8181816B" height="0.5px" />
        <Flex flexDirection="column" rowGap="6px" width="full">
          <Text fontSize="12px" color="var(--grey)" fontWeight="500">
            Amount
          </Text>
          <HStack spacing="6px">
            {loanAmounts.map((amount) => (
              <Button
                key={amount.value}
                width="87px"
                height="34px"
                rounded="36px"
                py="1rem"
                px="0.25rem"
                fontFamily="var(--poppins)"
                fontSize="12px"
                fontWeight="500"
                color={
                  formik.values.amount === amount.value
                    ? "var(--white-fade)"
                    : "var(--main)"
                }
                backgroundColor={
                  formik.values.amount === amount.value
                    ? "var(--main)"
                    : "var(--accent-bg)"
                }
                _hover={
                  formik.values.amount === amount.value
                    ? {
                        background: "var(--main)",
                        color: "var(--white-fade)",
                      }
                    : { backgroundColor: "var(--accent-bg)" }
                }
                onClick={() => formik.setFieldValue("amount", amount.value)}
              >
                {amount.label}
              </Button>
            ))}
          </HStack>
          {/* <Flex
            width="full"
            height="57px"
            rounded="6px"
            border="0.5px solid #8181816B"
            backgroundColor="white"
            fontFamily="var(--poppins)"
            color="var(--grey)"
            fontWeight="400"
            fontSize="12px"
            py="8px"
            px="19px"
            alignItems="center"
          >
            N{formatWithCommas(formik.values.amount)}
          </Flex> */}
          <InputField
            name="amount"
            radius="6px"
            placeholder={formik.values.amount ? "" : "N50,000"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("amount", e.target.value)
            }
            my="0"
          />
        </Flex>
        <Divider width="full" backgroundColor="#8181816B" height="0.5px" />
        <Flex width="100%" flexDirection="column" columnGap="10px">
          <Text fontWeight="500" fontSize="12px" color="var(--grey)">
            You will return
          </Text>
          <HStack
            spacing="18px"
            backgroundColor="var(--accent-bg)"
            py="3px"
            px="5px"
            rounded="36px"
            width="fit-content"
          >
            {paymentPlans.map((plan) => (
              <Button
                key={plan.value}
                width="124px"
                height="34px"
                rounded="36px"
                py="1rem"
                px="0.25rem"
                fontFamily="var(--poppins)"
                fontSize="12px"
                fontWeight="500"
                color={
                  formik.values.payment_plan === plan.value
                    ? "white"
                    : "var(--main)"
                }
                backgroundColor={
                  formik.values.payment_plan === plan.value
                    ? "var(--main)"
                    : "transparent"
                }
                _hover={
                  formik.values.payment_plan === plan.value
                    ? {
                        backgroundColor: "var(--main)",
                      }
                    : {
                        backgroundColor: "transparent",
                      }
                }
                onClick={() => {
                  formik.setFieldValue("payment_plan", plan.value);
                  if (
                    formik.values.payment_plan === "Outright_Payment" &&
                    formik.values.payment_duration !== null
                  ) {
                    formik.setFieldValue("payment_duration", null);
                    formik.setFieldValue(
                      "loan_duration",
                      loanDurations[0].value,
                    );
                  }
                }}
              >
                {plan.label}
              </Button>
            ))}
          </HStack>
          {formik.values.payment_plan === "Spread_Payment" ? (
            <Box mt="10px">
              <Text
                fontSize="12px"
                color="var(--grey)"
                fontWeight="500"
                lineHeight="1.6em"
              >
                Spread your loan over several months with a base interest rate
                of
                <Text as="span" color="var(--main)" mx="3px">
                  8% per month
                </Text>
                , increasing by
                <Text as="span" color="var(--main)" mx="3px">
                  1.5%
                </Text>
                every three months.
              </Text>
              <HStack
                justifyContent="space-between"
                width="full"
                minHeight="53px"
              >
                <Box width="164px">
                  <SelectField
                    options={loanDurations}
                    name="loan_duration"
                    color="var(--grey)"
                    caretColor="var(--text-1)"
                    onChange={(selectedOption) => {
                      formik.setFieldValue(
                        "payment_duration",
                        selectedOption.value,
                      );
                    }}
                  />
                </Box>
                <Flex flex="1" justifyContent="center">
                  <Text
                    fontFamily="var(--clash_grotesk)"
                    fontSize="26px"
                    fontWeight="600"
                    color="var(--dark)"
                  >
                    {calculateAndFormatPaybackAmount()}
                  </Text>
                </Flex>
              </HStack>
            </Box>
          ) : null}
        </Flex>
        <Divider width="full" backgroundColor="#8181816B" height="0.5px" />
        <HStack justifyContent="space-between" width="full">
          <Button
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontFamily="var(--poppins)"
            fontSize="12px"
            fontWeight="500"
            color="var(--main)"
            backgroundColor="#F6F6F6"
            _hover={{
              backgroundColor: "#F6F6F6",
            }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontFamily="var(--poppins)"
            fontSize="12px"
            fontWeight="500"
            color="white"
            backgroundColor="var(--main)"
            _hover={{
              backgroundColor: "var(--main)",
            }}
            onClick={handleNext}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};
