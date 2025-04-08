import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { BankInfo, UserBankAccount } from "@utils/types";
import { getCookie } from "cookies-next";

export const addBank = async (payload: BankInfo) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.bankDetails, {
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

export const deleteBank = async (id: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token || !id) {
    console.error("bankId or token is not available");
    return;
  }

  try {
    const request = await fetch(`${app.customer.deleteBankDetails}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const updateBankInfo = async (bankId: string, payload: BankInfo) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token || !bankId) {
    console.error("bankId or token is not available");
    return;
  }

  try {
    const request = await fetch(`${app.customer.updateBankDetails}/${bankId}`, {
      method: "PATCH",
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
    console.error(`${(error as Error).message}`);
  }
};
