import { Container } from "../container";
import {
  VStack,
  Text,
  Divider,
  Flex,
  Button,
  HStack,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { InputField, SelectField } from "@components/form";
import { loanAmounts, paymentPlans, loanDurations } from "@utils/constants";
import { LoanApplicationFormValues } from "@utils/validators/loan-schema";
import { useFormikContext } from "formik";
import { useNavigate } from "@tanstack/react-router";
import { useLoanStepFlow } from "@hooks/context";
import { calculatePaybackAmount, formatWithCommas } from "@utils/misc";

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

  const getActiveTabIndex = () => {
    return paymentPlans.findIndex((plan) => plan.value === payment_plan);
  };

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

  const handleTabChange = (index: number) => {
    const selectedPlan = paymentPlans[index];
    formik.setFieldValue("payment_plan", selectedPlan.value);

    if (
      selectedPlan.value === "Outright_Payment" &&
      formik.values.payment_duration !== null
    ) {
      formik.setFieldValue("payment_duration", null);
      formik.setFieldValue("loan_duration", loanDurations[0].value);
    }
  };

  const handleNext = () => {
    if (loan_purpose !== "" && amount !== "" && loan_duration && payment_plan) {
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
        <Divider
          width="full"
          backgroundColor="var(--border-muted)"
          height="0.5px"
        />
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
        <Divider
          width="full"
          backgroundColor="var(--border-muted)"
          height="0.5px"
        />
        <Flex width="100%" flexDirection="column" columnGap="10px">
          <Text fontWeight="500" fontSize="12px" color="var(--grey)">
            You will return
          </Text>

          <Tabs
            index={getActiveTabIndex()}
            variant="unstyled"
            onChange={handleTabChange}
          >
            <TabList
              background="var(--accent-bg)"
              borderRadius="36px"
              height="40px"
              px="5px"
              py="3px"
              position="relative"
              width="75%"
            >
              <Box
                position="absolute"
                width={`${100 / paymentPlans.length}%`}
                height="34px"
                left={`${getActiveTabIndex() * (100 / paymentPlans.length)}%`}
                top="3px"
                background="var(--main)"
                borderRadius="36px"
                transition="left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                zIndex={0}
              />
              {paymentPlans.map((plan, index) => (
                <Tab
                  key={plan.value}
                  zIndex={1}
                  flex="1"
                  height="34px"
                  fontSize="12px"
                  fontWeight="500"
                  color={
                    getActiveTabIndex() === index ? "white" : "var(--main)"
                  }
                  _selected={{
                    color: "white",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                >
                  {plan.label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel p={0} mt="10px">
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
                  alignItems="center"
                  mt="10px"
                >
                  <Box width="164px">
                    <SelectField
                      options={loanDurations}
                      name="loan_duration"
                      color="var(--grey)"
                      caretColor="var(--text-1)"
                      fontSize="12px"
                      menuWidth="100%"
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
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Divider
          width="full"
          backgroundColor="var(--border-muted)"
          height="0.5px"
        />
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
