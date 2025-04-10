import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { Response, NotificationPayload } from "@utils/types";
import { getCookie } from "cookies-next";

export const getAllNotifications = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const { customerNotification } = app.customer;

    const request = await fetch(customerNotification, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<NotificationPayload> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
    throw new Error(`${(error as Error).message}`);
  }
};
