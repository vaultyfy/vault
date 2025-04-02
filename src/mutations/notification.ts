import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { getCookie } from "cookies-next";

export const markNotificationAsRead = async (notifcationId: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const { markCustomerNotificationAsRead } = app.customer;

    const url = `${markCustomerNotificationAsRead}/${notifcationId}`;

    const request = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

export const markAllNotificationsAsRead = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const { markCustomerNotificationAsAllRead } = app.customer;

    const request = await fetch(markCustomerNotificationAsAllRead, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};
