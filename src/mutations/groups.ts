import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { GroupPayload } from "@utils/types";
import { getCookie } from "cookies-next";

export const createGroup = async (payload: GroupPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.groups.create, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...HEADER_API_KEY,
      },
      body: JSON.stringify({ ...payload }),
    });

    return request
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
