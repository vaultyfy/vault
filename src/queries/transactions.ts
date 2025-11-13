import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { Response, Transaction, TransactionResponse } from "@utils/types";
import { getCookie } from "cookies-next";

export const getTransactions = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;
  try {
    const request = await fetch(app.customer.transactions, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const response: TransactionResponse = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getTransaction = async (transactionId: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;
  try {
    const request = await fetch(
      `${app.customer.transaction}/${transactionId}`,
      {
        method: "GET",
        headers: {
          ...HEADER_API_KEY,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const response: Response<Transaction> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
