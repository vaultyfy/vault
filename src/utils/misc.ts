import {
  LoanDurationEnum,
  PaymentPlanEnum,
  PaymentDurationEnum,
} from "./validators/loan-schema";

type CountedObject = {
  label: string;
  value: string;
};

export const generateNoOfDays = (days?: number): CountedObject[] => {
  const result: CountedObject[] = [];
  const newDays = days || 100;

  for (let i = 5; i <= newDays; i += 5) {
    result.push({ label: `${i} days`, value: `${i}` });
  }

  return result;
};

export const generateNoOfCycles = (cycleCount?: number): CountedObject[] => {
  const result: CountedObject[] = [];
  const cycles = cycleCount || 10;

  for (let i = 1; i <= cycles; i += 1) {
    result.push({ label: `${i}`, value: `${i}` });
  }

  return result;
};

export const skeleton = {
  startColor: "var(--pale-grey)",
  endColor: "var(--grey-sec)",
  light: {
    startColor: "var(--white-smoke)",
    endColor: "var(--grey-100)",
  },
};

export const dicebear = "https://api.dicebear.com/7.x/micah/svg";

export const formatPrice = (price: number) => {
  const currencySymbol = "₦";

  if (price >= 1000000) {
    const millions = price / 1000000;
    return `${currencySymbol}${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }

  if (price >= 1000) {
    const thousands = price / 1000;
    return `${currencySymbol}${thousands.toFixed(thousands % 1 === 0 ? 0 : 1)}K`;
  }

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatWithCommas = (value: string) => {
  const numeric = value.replace(/,/g, "").replace(/\D/g, "");
  return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const BASE_INTEREST = 0.08;
const SPREAD_INTEREST_PER_MONTH = 0.005;

const getMonthsFromDuration = (duration: string): number => {
  switch (duration) {
    case LoanDurationEnum.ONE_MONTH:
    case PaymentDurationEnum.ONE_MONTH:
      return 1;
    case LoanDurationEnum.THREE_MONTHS:
    case PaymentDurationEnum.THREE_MONTHS:
      return 3;
    case LoanDurationEnum.SIX_MONTHS:
    case PaymentDurationEnum.SIX_MONTHS:
      return 6;
    case LoanDurationEnum.ONE_YEAR:
    case PaymentDurationEnum.ONE_YEAR:
      return 12;
    default:
      throw new Error("Invalid duration");
  }
};

export const calculatePaybackAmount = (
  amount: number,
  paymentPlan: string,
  spreadDuration?: string
): number => {
  // For one-time payment, apply only base interest
  if (paymentPlan === PaymentPlanEnum.OUTRIGHT) {
    return amount * (1 + BASE_INTEREST);
  }

  // For spread payment, calculate additional interest based on duration
  if (paymentPlan === PaymentPlanEnum.SPREAD && spreadDuration) {
    const spreadMonths = getMonthsFromDuration(spreadDuration);
    const totalInterest =
      BASE_INTEREST + SPREAD_INTEREST_PER_MONTH * spreadMonths;

    const newTotal = Math.floor(amount * (1 + totalInterest));
    return newTotal;
  }

  return amount * (1 + BASE_INTEREST);
};
