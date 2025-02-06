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
    login: `${BASE_URL}/customer/auth/login`
  },
  admin: {
    profile: `${BASE_URL}/admin/auth/profile`,
    signup: `${BASE_URL}/admin/auth/signup-admin`,
    verifyOtp: `${BASE_URL}/admin/auth/verify-otp`,
    resendOtp: `${BASE_URL}/admin/auth/resend-otp`,
    forgotPassword: `${BASE_URL}/admin/auth/forgot-password`,
    verifyResetPasswordOtp: `${BASE_URL}/admin/auth/verify-reset-password-otp`,
    resetPassword: `${BASE_URL}/admin/auth/reset-password`,
    login: `${BASE_URL}/admin/auth/login`
  }
} as const;
