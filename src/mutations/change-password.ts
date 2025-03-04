import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { PasswordPayload } from "@utils/types";
import { getCookie } from "cookies-next";

export const changePassword = async (payload: PasswordPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.changePassword, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
      body: JSON.stringify({
        ...payload
      })
    });

    return request
  } catch (error) {
    console.error(error);
  }
};
