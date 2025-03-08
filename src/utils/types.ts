export type Response<T = any> = {
  success: boolean;
  payload: T | null;
  message: string;
  status: number;
  errors?: string[] | string;
};

export type LoginResponse = {
  token: { token: string };
  user: User;
  KycAction: any | null;
  Kycpercentage: string;
};

export interface SignupResponse extends Omit<Response, "payload"> {
  payload: User;
}

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

export type UserBanks = {
  currentPage: number;
  pageSize: number;
  total: number;
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
  type: "Credit" | string;
  status: "Successful" | string;
  createdAT: string;
  reference: string;
  description: string;
  metadata: Record<string, unknown>;
  customer: string;
};

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

export type Participant = {
  id: number;
  participantID: string;
  position: number;
  completedCircleCount: number;
  missedContributionCount: number;
  hasCashedOut: boolean;
  contributionDates: string;
  nextContributionDate: string;
  payoutDate: string;
  totalContributionsRequired: number;
  contributionsMade: number;
  payoutAmount: number;
  createdAT: string;
  updatedAT: string;
  group: string;
  customer: string;
  contributions: Contribution[];
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

export type Goal = {
  id: number;
  goalID: string;
  name: string;
  target: number;
  duration: string;
  goalReached: boolean;
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
