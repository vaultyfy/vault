import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { auth } from "@utils/endpoints";
import { Response, User } from "@utils/types";
import { getCookie } from "cookies-next";

export const TOKEN = getCookie(TOKEN_KEY, { ...cookieOptions });

export const getUser = async () => {
  try {
    const request = await fetch(auth.customer.profile, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
        ...HEADER_API_KEY,
      },
    });
    const response: Response<User> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
