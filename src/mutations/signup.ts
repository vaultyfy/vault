import { auth } from "@utils/endpoints";
export const signupOtp = async (
  params: { otp: string },
  isResend: boolean,
  clientEmail: string
) => {
  const url = isResend ? auth.customer.resendOtp : auth.customer.verifyOtp;
  const headers: HeadersInit = isResend
    ? { "Content-Type": "application/json", email: clientEmail }
    : { "Content-Type": "application/json" };

  const request = await fetch(url, {
    method: "POST",
    headers: headers,
    body: isResend
      ? JSON.stringify({ email: clientEmail })
      : JSON.stringify({ ...params }),
  });

  return request;
};
