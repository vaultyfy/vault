import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { UserPayload } from "@utils/types";
import { getCookie } from "cookies-next";

export const updateUserInfo = async (payload: UserPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.updateRecord, {
      method: "PATCH",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        acceptTermsAndConditions: true,
      }),
    });

    return request;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
