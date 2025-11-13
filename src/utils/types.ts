import { LoanDuration, PaymentPlan } from "@utils/validators/loan-schema";

export type Response<T = any> = {
  success: boolean;
  payload: T | null;
  message: string;
  status: number;
  errors?: string[] | string;
};

export type Common = {
  currentPage: number;
  pageSize: number;
  total: number;
};

export type GroupTypeFilter = "Active" | "Completed";

export type LoanStep =
  | "loan-purpose"
  | "financial-details"
  | "eligibility-acceptance";

export const allLoanSteps: LoanStep[] = [
  "loan-purpose",
  "financial-details",
  "eligibility-acceptance",
];

export type LoginResponse = {
  token: { token: string };
  user: User;
  KycAction: any | null;
  Kycpercentage: string;
};

export type ReferralStats = {
  referralPercentage: number;
  referralCount: number;
  joinedReferrals: number;
};

export type ConsistencyStats = {
  progressPercentage: number;
  completedCyclesCount: number;
  cyclesRemaining: number;
  consistencyRewardEligible: boolean;
};

export type RemainingContributions = {
  contributions: {
    group: string;
    remaining: number;
    frequency: ContributionFrequency;
  }[];
  grandTotal: number;
  grandTotalPercentage: number;
};

export interface SignupResponse extends Omit<Response, "payload"> {
  payload: User;
}

export type PaymentResponse = {
  paymentResponse: {
    status: boolean;
    message: string;
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  };
};

export type Goal = {
  id: number;
  goalID: string;
  name: string;
  target: string;
  duration: string;
  goalReached: boolean;
  createdAT: string;
  updatedAT: string | null;
  owner: User;
};

export type GoalsResponse = Response<
  Common & {
    data: Goal[];
  }
>;

export type ReferalLinkResponse = {
  referalLink: string;
};

export type Bank = {
  logo: string;
  name: string;
  slug: string;
  code: string;
};

export type BankInfo = {
  bankName: string;
  accountNumber: string;
  accountName: string;
};

export type UserBankAccount = BankInfo & {
  id: number;
  bankID: string;
  createdAT: string;
  updatedAT: string | null;
  owner: User;
};

export type UserBanks = Common & {
  data: UserBankAccount[];
};

export type Wallet = {
  id: number;
  walletAddrress: string;
  balance: number;
  isActive: boolean;
  createdAT: string;
  updatedAT: string;
  customer: Customer;
};

export type User = {
  id: number;
  name: string;
  deviceToken: string;
  address: string;
  phoneNumber: string;
  altrnatePhoneNumber: string;
  contributions: any[];
  createdAT: string;
  created_groups: any[];
  customerID: string;
  email: string;
  isVerified: boolean;
  isFullyVerified: boolean;
  kycStatus: Record<string, any>;
  KycAction: null;
  Kycpercentage: number | string;
  my_transactions: any[];
  my_wallet: Wallet;
  participations: any[];
  password: string;
  profilePicture: string;
  resetPasswordToken: string;
  resetPasswordTokenExpTime: null | string;
  role: string;
  updatedAT: string;
  referralCount: number;
  referralPercentage: string | number;
  rewardEligible: boolean;
  completedCyclesCount: number;
  consistencyRewardEligible: boolean;
  nin?: string;
  bvn?: string;
};

export type Customer = {
  id: number;
  customerID: string;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  altrnatePhoneNumber: string;
  address: string;
  profilePicture: string;
  deviceToken: string;
  isVerified: boolean;
  acceptedTermsAndConditions: boolean;
  role: "Admin" | string;
  resetPasswordToken: string;
  resetPasswordTokenExpTime: string;
  createdAT: string;
  updatedAT: string;
  KycAction: "facial_recognition" | string;
  kycStatus: Record<string, unknown>;
  Kycpercentage: number;
  my_wallet: Wallet;
  my_transactions: Transaction[];
  created_groups: Group[];
  participations: any | [];
  contributions: Contribution[];
  bank_details: BankDetail[];
  goals: Goal[];
  loans: Loan[];
};

export type Transaction = {
  id: number;
  transactionID: string;
  walletAddrress: string;
  amount: number;
  status: "Successful" | string;
  createdAT: string;
  reference: string;
  description: string;
  metadata: Record<string, unknown>;
  customer: string;
  type: "Credit" | "thrift" | "withdrawal" | "loan";
};

export type TransactionResponse = Response<
  Common & {
    data: Transaction[];
  }
>;

export type Group = {
  id: number;
  groupID: string;
  name: string;
  groupDescription: string;
  groupInviteLink: string;
  contributionAmount: number;
  contributionFrequency: ContributionFrequency;
  numberOfdaysOrMembers: number;
  numberOfcircle: number;
  numberOfparticipantsAvailable: number;
  payOutAmount: number;
  isApproved: boolean;
  isActive: boolean;
  startDate: string;
  endDate: string;
  circleCounts: number;
  joinedParticipantsCount: number;
  createdAT: string;
  updatedAT: string;
  createdBy: Customer;
  participants: Participant[];
};

export type UserGroups = Common & {
  data: Group[];
};

export type Participant = {
  id: number;
  participantID: string;
  position: number;
  completedCircleCount: number;
  missedContributionCount: number;
  hasCashedOut: boolean;
  contributionDates: string[];
  nextContributionDate: string;
  payoutDate: string;
  totalContributionsRequired: number;
  contributionsMade: number;
  payoutAmount: number;
  createdAT: string;
  updatedAT: string;
  group: string;
  customer: Customer;
  contributions: Contribution[];
  missedContributionDates: string[];
};

export type Contribution = {
  id: number;
  amount: number;
  date: string;
  participant: string;
  customer: string;
};

export type BankDetail = {
  id: number;
  bankID: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  createdAT: string;
  updatedAT: string;
  owner: string;
};

export type Loan = {
  id: number;
  loanID: string;
  loanPurpose: string;
  amount: number;
  loanDuration: "One_Month" | string;
  paymentPlan: "Spread_Payment" | string;
  spreadPaymentDuration: "One_Month" | string;
  bankStatement: string;
  jobOrBusiness: string;
  annualIncome: string;
  amountPaid: number;
  loanBalance: number;
  nextPaymentDate: string;
  isApproved: boolean;
  isDenied: boolean;
  hasPaidOffdebtCompletely: boolean;
  payBackAmount: number;
  createdAT: string;
  loanApprovedAT: string;
  loanDeclinedAT: string;
  updatedAT: string;
  customer: string;
  approvedBy: Admin;
};

export type Admin = {
  id: number;
  adminID: string;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
  isVerified: boolean;
  role: "Admin" | string;
  resetPasswordToken: string;
  resetPasswordTokenExpTime: string;
  createdAT: string;
  updatedAT: string;
  approvedLoans: string[];
};

export type ExpectedReturns = {
  expectedReturns: number;
};

export type PasswordPayload = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type ContributionFrequency =
  | "Monthly"
  | "Weekly"
  | "Yearly"
  | "Daily"
  | "Three_Months"
  | "Six_Months";

export type GroupPayload = {
  name: string;
  groupDescription: string;
  contributionAmount: number;
  numberOfdaysOrMembers: number;
  numberOfcircle: number;
  startDate: string;
  numberOfparticipantsAvailable: number;
  contributionFrequency: string | ContributionFrequency;
};

// type def for when a user wants to update their account info
export type UserPayload = {
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
  acceptTermsAndConditions: boolean;
};

export type Notification = {
  id: number;
  notificationID: `VAUTNOT${string}`;
  date: string;
  account: string;
  message: string;
  subject: string;
  isRead: boolean;
  readAt: string | null;
  link: string | null;
};

export type NotificationPayload = Common & {
  data: Notification[];
};

export type LoanApplicationPayload = {
  bankStatement: File;
  loanPurpose: string;
  amount: string;
  loanDuration: LoanDuration;
  paymentPlan: PaymentPlan;
  spreadPaymentDuration: LoanDuration;
  jobOrBusiness: string;
  annualIncome: string;
};

type LoanStatus =
  | "Approved"
  | "Denied"
  | "Disbursed"
  | "Pending"
  | "PaidBack"
  | "Adjusted";

type LoanApprovedType = "Oroginal" | "Adjusted";

type LoanApprovedByType = {
  id: number;
  adminID: string;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
  isVerified: boolean;
  role: "Admin";
  adminType: "Super_Admin" | "Invited_Admin ";
  resetPasswordToken: string;
  createdAT: string | Date;
  updatedAT: string | Date;
};

export type LoanSinglePayload = {
  id: number;
  loanID: string;
  loanPurpose: string;
  loanDuration: string;
  loanBalance: string;
  createdAT: string;
  loanApprovedAT: string | null;
  loanDeclinedAT: string | null;
  updatedAT: string | null;
  loanDeclinedReason: string | null;
  customer: Customer;
  loanAdjustedAT: string | null;
  loanApprovedType: LoanApprovedType;
  approvedBy: string | null;
  loanStatus: LoanStatus;
  loancompletelyPaidBackAT: string | null;
  loanDisbursedAT: string | null;
  annualIncome: string;
  amountPaid: string;
  amount: string;
  bankStatement: string;
  nextPaymentDate: string;
  paymentPlan: string;
  spreadPaymentDuration: string | null;
  hasPaidOffdebtCompletely: boolean;
  payBackAmount: string;
  disbursementAmount: string;
  insuranceFee: string;
  loanAdjustedBy: LoanApprovedByType;
};

export type LoanPayload = Common & {
  data: LoanSinglePayload[];
};
