export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const auth = {
  customer: {
    profile: `${BASE_URL}/customer/auth/profile`,
    addDeviceToken: `${BASE_URL}/customer/auth/add-deviceToken`,
    signup: `${BASE_URL}/customer/auth/signup-customer`,
    verifyOtp: `${BASE_URL}/customer/auth/verify-otp`,
    resendOtp: `${BASE_URL}/customer/auth/resend-otp`,
    forgotPassword: `${BASE_URL}/customer/auth/forgot-password`,
    verifyResetPasswordOtp: `${BASE_URL}/customer/auth/verify-reset-password-otp`,
    resetPassword: `${BASE_URL}/customer/auth/reset-password`,
    login: `${BASE_URL}/customer/auth/login`,
  },
  admin: {
    profile: `${BASE_URL}/admin/auth/profile`,
    signup: `${BASE_URL}/admin/auth/signup-admin`,
    verifyOtp: `${BASE_URL}/admin/auth/verify-otp`,
    resendOtp: `${BASE_URL}/admin/auth/resend-otp`,
    forgotPassword: `${BASE_URL}/admin/auth/forgot-password`,
    verifyResetPasswordOtp: `${BASE_URL}/admin/auth/verify-reset-password-otp`,
    resetPassword: `${BASE_URL}/admin/auth/reset-password`,
    login: `${BASE_URL}/admin/auth/login`,
  },
} as const;

export const app = {
  customer: {
    wallet: `${BASE_URL}/customer/my-wallet`,
    bvnVerification: `${BASE_URL}/customer/kyc/bvn-verification`,
    ninVerification: `${BASE_URL}/customer/kyc/nin-verification`,
    expectedReturns: `${BASE_URL}/customer/dashboard/expectedReturns`,
    remainingContributions: `${BASE_URL}/customer/dashboard/remainingContributions`,
    constributionSummary: `${BASE_URL}/customer/dashboard/contributionSummary`,
    bankDetails: `${BASE_URL}/customer/add-bankDetails`,
    updateBankDetails: `${BASE_URL}/customer/update-bankDetails`,
    deleteBankDetails: `${BASE_URL}/customer/delete-bankDetails`,
    yourBanks: `${BASE_URL}/customer/all-my-bankDetails`,
    changePassword: `${BASE_URL}/customer/change-password`,
    updateRecord: `${BASE_URL}/customer/update-record`,
    savingsTrend: `${BASE_URL}/customer/dashboard/savingsTrend`,
    setGoal: `${BASE_URL}/customer/set-goal`,
    allGoals: `${BASE_URL}/customer/all-my-goals`,
    updateGoal: `${BASE_URL}/customer/update-goal`,
    deleteGoal: `${BASE_URL}/customer/delete-goal`,
    referrals: `${BASE_URL}/customer/referral/stats`,
    consistency: `${BASE_URL}/customer/consistency/stats`,
    customerNotification: `${BASE_URL}/customer/all-customer-notifications`,
    markCustomerNotificationAsRead: `${BASE_URL}/customer/mark-as-read`,
    markCustomerNotificationAsAllRead: `${BASE_URL}/customer/mark-all-as-read`,
    markMultipleCustomerNotificationAsRead: `${BASE_URL}/customer/mark-multiple-as-read`,
  },
  groups: {
    create: `${BASE_URL}/groups/create`,
    all: `${BASE_URL}/groups/all-groups`,
    filterGroups: `${BASE_URL}/groups/all-groups-with-filter`,
    mine: `${BASE_URL}/groups/all-myParticipatoryGroups`,
    share: `${BASE_URL}/groups/generate-referalLink`,
    group: `${BASE_URL}/groups/one-group`,
    join: `${BASE_URL}/groups/joinGroup`,
    pay: `${BASE_URL}/groups/makeContribution`,
    status: `${BASE_URL}/groups/all-myParticipatoryGroupswithStatusFilter`,
  },
  loan: {
    applyForLoan: `${BASE_URL}/loan/apply`,
    allMyLoans: `${BASE_URL}/loan/all-my-loans`,
    singleLoan: `${BASE_URL}/loan/one-loan`,
    decideOnLoan: `${BASE_URL}/loan/decide-onAdjustedLoan`,
    payBackLoan: `${BASE_URL}/loan/payBack-loan`,
  },
} as const;
