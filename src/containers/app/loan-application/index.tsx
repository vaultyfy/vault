import { Box, Flex } from "@chakra-ui/react";
import { FinancialDetails, LoanPurpose } from "@components/loan-me/form";
import { Formik, Form } from "formik";
import {
  LoanApplicationFormValues,
  loanApplicationSchema,
} from "@utils/validators/loan-schema";
import { ApplicationSuccess, ProgressTabs } from "@components/loan-me";

const initialValues: LoanApplicationFormValues = {
  bank_statement: null,
  loan_purpose: "",
  amount: "",
  loan_duration: "One_Month",
  payment_plan: "Outright_Payment",
  payment_duration: null,
  job_business: "",
  annual_income: "",
};

export const LoanApplication = () => {
  return (
    <Flex alignItems="center" width="full" flexDirection="column" py="1rem">
      <ProgressTabs />
      <Box mt="2rem">
        <Formik
          initialValues={initialValues}
          validationSchema={loanApplicationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form>
              {/* <LoanPurpose /> */}
              {/* <FinancialDetails /> */}
              <ApplicationSuccess />
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
