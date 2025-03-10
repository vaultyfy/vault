import { BANKS_LIST, cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { Bank, Response, UserBanks } from "@utils/types";
import { getCookie } from "cookies-next";

export const getAllBanks = async () => {
  try {
    const request = await fetch(BANKS_LIST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response: Bank[] = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUserBanks = async () => {
  const token = getCookie(TOKEN_KEY, {...cookieOptions})
  if (!token) return;

  try {
    const request = await fetch(app.customer.yourBanks, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY
      }
    })

    const response: Response<UserBanks> = await request.json();
    return response
  } catch(error) {
    console.error(`${(error as Error).message}`)
  }
}
