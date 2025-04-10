import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FinancialDetails, LoanPurpose } from "../loan-me/components/form";
import { Formik, Form } from "formik";
import {
  LoanApplicationFormValues,
  loanApplicationSchema,
  LoanDuration,
} from "@utils/validators/loan-schema";
import { ApplicationSuccess, ProgressTabs } from "../loan-me/components";
import { useLoanStepFlow } from "@hooks/context";
import { applyForLoan } from "@mutations/loan";
import { LoanApplicationPayload, LoanStep } from "@utils/types";
import { useToastContext } from "@hooks/context";
import {
  LoanEligibilityContainer,
  RejectOffer,
  AcceptOffer,
} from "../loan-me/components";
import { useLoan } from "@hooks/swr";
import { useNavigate } from "@tanstack/react-router";

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
  const {
    activeStep,
    completedSteps,
    setActiveStep,
    completeStep,
    resetSteps,
  } = useLoanStepFlow();
  const { mutate } = useLoan();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (activeStep === "eligibility-acceptance") {
      const currentCompletedSteps: LoanStep[] = [
        "loan-purpose",
        "financial-details",
        "eligibility-acceptance",
      ];
      completeStep(currentCompletedSteps);
    }
  }, []);

  const { openToast } = useToastContext();
  const [acceptanceStatus, setAcceptanceStatus] = React.useState<
    "accept" | "reject" | null
  >(null);

  const [isApplicationSuccessful, setIsApplicationSuccessful] =
    React.useState(false);

  return (
    <Flex alignItems="center" width="full" flexDirection="column" py="1rem">
      <ProgressTabs />
      <Box mt="2rem">
        <Formik
          initialValues={initialValues}
          validationSchema={loanApplicationSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            const data: LoanApplicationPayload = {
              bankStatement: values.bank_statement as File,
              loanPurpose: values.loan_purpose,
              amount: values.amount,
              loanDuration: values.loan_duration,
              paymentPlan: values.payment_plan,
              spreadPaymentDuration: !values.payment_duration
                ? values.loan_duration
                : (values.payment_duration as LoanDuration),
              jobOrBusiness: values.job_business,
              annualIncome: values.annual_income.replaceAll(",", ""),
            };

            try {
              setSubmitting(true);
              const request = await applyForLoan(data);

              if (!request?.ok) {
                const response = await request?.json();
                openToast(response.message, "error");
              }

              const response = await request?.json();
              openToast(response.message, "success");
              resetForm();
              resetSteps();
              mutate();
              navigate({ to: "/dashboard/loan-me" });
              setIsApplicationSuccessful(true);
            } catch (error) {
              if (error instanceof Error) {
                openToast(error.message, "error");
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {(formik) => {
            console.log(formik.values);
            return (
              <Form>
                {isApplicationSuccessful ? (
                  <ApplicationSuccess />
                ) : (
                  <Box>
                    {activeStep === "loan-purpose" && (
                      <LoanPurpose
                        onClick={() => {
                          setActiveStep("financial-details");
                          completeStep("financial-details");
                        }}
                      />
                    )}
                    {activeStep === "financial-details" && <FinancialDetails />}
                  </Box>
                )}
              </Form>
            );
          }}
        </Formik>

        {activeStep === "eligibility-acceptance" && (
          <>
            {acceptanceStatus === null && (
              <LoanEligibilityContainer
                onClick={(status: "accept" | "reject") => {
                  setAcceptanceStatus(status);
                }}
              />
            )}
            {acceptanceStatus === "accept" && <AcceptOffer />}
            {acceptanceStatus === "reject" && (
              <RejectOffer handleBack={() => setAcceptanceStatus(null)} />
            )}
          </>
        )}
      </Box>
    </Flex>
  );
};
