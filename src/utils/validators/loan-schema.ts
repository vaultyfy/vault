import * as Yup from "yup";

const validateIncome = (value: string | undefined) => {
  if (!value) return false;

  // Check if value only contains numbers and commas (e.g., 50,000,000)
  const isValidFormat = /^[0-9,]+$/.test(value);
  if (!isValidFormat) return false;

  // Remove commas and check if it converts to a valid number
  const numericValue = Number(value.replace(/,/g, ""));
  return !isNaN(numericValue) && numericValue >= 10000;
};

export const LoanDurationEnum = {
  ONE_MONTH: "One_Month",
  THREE_MONTHS: "Three_Months",
  SIX_MONTHS: "Six_Months",
  ONE_YEAR: "One_Year",
} as const;

export const PaymentPlanEnum = {
  SPREAD: "Spread_Payment",
  OUTRIGHT: "Outright_Payment",
} as const;

export const PaymentDurationEnum = {
  ONE_MONTH: "One_Month",
  THREE_MONTHS: "Three_Months",
  SIX_MONTHS: "Six_Months",
  ONE_YEAR: "One_Year",
} as const;

const loanDurationOptions = Object.values(LoanDurationEnum);
const paymentPlanOptions = Object.values(PaymentPlanEnum);
const paymentDurationOptions = Object.values(PaymentDurationEnum);

export const loanApplicationSchema = Yup.object().shape({
  bank_statement: Yup.mixed<File>()
    .nullable()
    .test("fileSize", "File size must be less than 10MB", (value) => {
      if (!value || !(value instanceof File)) return true;
      return value.size <= 10 * 1024 * 1024;
    })
    .test(
      "fileType",
      "Only .jpg, .jpeg, .png, and .pdf are allowed",
      (value) => {
        if (!value || !(value instanceof File)) return true;
        const acceptedTypes = [
          "application/pdf",
          "application/docx",
          "application/doc",
        ];
        return acceptedTypes.includes(value.type);
      }
    )
    .required("Bank statement is required"),

  loan_purpose: Yup.string()
    .required("Loan purpose is required")
    .min(10, "Loan purpose must be at least 10 characters")
    .max(250, "Loan purpose cannot exceed 200 characters"),

  amount: Yup.string()
    .required("Amount is required")
    .test(
      "valid-income",
      "Minimum annual income is ₦10,000 (numbers only)",
      validateIncome
    ),

  loan_duration: Yup.string()
    .required("Loan duration is required")
    .oneOf(loanDurationOptions, "Please select a valid loan duration"),

  payment_plan: Yup.string()
    .required("Payment plan is required")
    .oneOf(paymentPlanOptions, "Please select a valid payment plan"),

  payment_duration: Yup.string()
    .nullable()
    .when("payment_plan", {
      is: PaymentPlanEnum.SPREAD,
      then: (schema) =>
        schema
          .required("Payment duration is required for spread payments")
          .oneOf(
            paymentDurationOptions,
            "Please select a valid payment duration"
          ),
      otherwise: (schema) => schema.nullable(),
    }),

  job_business: Yup.string()
    .required("Job/Business information is required")
    .min(2, "Too short")
    .max(100, "Cannot exceed 100 characters"),

  annual_income: Yup.string()
    .required("Annual income is required")
    .test(
      "valid-income",
      "Minimum annual income is ₦10,000 (numbers only)",
      validateIncome
    ),
});

//this is to retreive the values of said keys in the enums
export type LoanDuration =
  (typeof LoanDurationEnum)[keyof typeof LoanDurationEnum];
export type PaymentPlan =
  (typeof PaymentPlanEnum)[keyof typeof PaymentPlanEnum];
type PaymentDuration =
  (typeof PaymentDurationEnum)[keyof typeof PaymentDurationEnum];

export interface LoanApplicationFormValues {
  bank_statement?: File | null;
  loan_purpose: string;
  amount: string;
  loan_duration: LoanDuration;
  payment_plan: PaymentPlan;
  payment_duration?: PaymentDuration | null;
  job_business: string;
  annual_income: string;
}
