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

export type GoalPayload = {
  name: string;
  taget: number;
  duration: string;
};

export const setGoal = async (payload: GoalPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.setGoal, {
      method: "POST",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
      }),
    });

    return request
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const updateGoal = async (goalId: string, payload: GoalPayload) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;
  if (!goalId) {
    console.log("goalId is missing")
    return;
  }

  try {
    const request = await fetch(`${app.customer.setGoal}/${goalId}`, {
      method: "PATCH",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
      }),
    });

    return request
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const deleteGoal = async (goalId: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;
  if (!goalId) {
    console.log("goalId is missing")
    return;
  }

  try {
    const request = await fetch(`${app.customer.deleteGoal}/${goalId}`, {
      method: "DELETE",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return request
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
