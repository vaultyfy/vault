import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app, auth } from "@utils/endpoints";
import { Response, User } from "@utils/types";
import { getCookie } from "cookies-next";

export const getUser = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions })
  if (!token) return;
  try {
    const request = await fetch(auth.customer.profile, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });
    const response: Response<User> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getGoals = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.allGoals, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const response = await request.json()
    return response
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
