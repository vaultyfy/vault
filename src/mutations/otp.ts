import { auth } from "@utils/endpoints";

export const resendOtp = async (email: string) => {
  try {
    const request = await fetch(auth.customer.resendOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const sendPasswordResetOtp = async (email: string) => {
  try {
    const request = await fetch(auth.customer.forgotPassword, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const verifyResetOtp = async (otp: string) => {
  try {
    const request = await fetch(auth.customer.verifyResetPasswordOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const verifyOtp = async (otp: string) => {
  try {
    const request = await fetch(auth.customer.verifyOtp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};
