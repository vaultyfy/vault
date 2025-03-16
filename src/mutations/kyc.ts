import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { getCookie } from "cookies-next";

export const bnvVerification = async (bvn: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.bvnVerification, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...HEADER_API_KEY,
      },
      body: JSON.stringify({ bvn }),
    });

    return request;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const ninVerification = async (nin: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.ninVerification, {
      method: "POST",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nin }),
    });

    return request
  } catch (error) {
    console.error(error);
  }
};
