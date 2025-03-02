import { app } from "@utils/endpoints";
import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { Response, Wallet } from "@utils/types";
import { getCookie } from "cookies-next";

export const getWallet = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions })
  if (!token) return;
  try {
    const request = await fetch(app.customer.wallet, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<Wallet> = await request.json()
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
