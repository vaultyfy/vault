import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { LoanApplicationPayload } from "@utils/types";
import { getCookie } from "cookies-next";

export const applyForLoan = async (payload: LoanApplicationPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const formData = new FormData();

  formData.append("bankStatment", payload.bankStatement as File);
  formData.append("loanPurpose", payload.loanPurpose);
  formData.append("amount", payload.amount);
  formData.append("loanDuration", payload.loanDuration);
  formData.append("paymentPlan", payload.paymentPlan);
  formData.append("spreadPaymentDuration", payload.spreadPaymentDuration);
  formData.append("jobOrBusiness", payload.jobOrBusiness);
  formData.append("annualIncome", payload.annualIncome);

  try {
    const request = await fetch(app.loan.applyForLoan, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
      body: formData,
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

type LoanDecisionPayload = {
  approve: boolean;
  loanDeclineReason?: string;
};

export const decideOnLoan = async (
  payload: LoanDecisionPayload,
  loanID: string
) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const url = `${app.loan.decideOnLoan}/${loanID}`;

  try {
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
      body: JSON.stringify({
        ...payload,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const payBackLoan = async (loanID: string, payBackAmount: number) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const url = `${app.loan.payBackLoan}/${loanID}`;

  try {
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
      body: JSON.stringify({
        payBackAmount,
      }),
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};
