import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import {
  Group,
  ReferalLinkResponse,
  Response,
  UserGroups,
  ContributionFrequency,
} from "@utils/types";
import { getCookie } from "cookies-next";

export const getJoinedGroups = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.groups.mine, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const response: Response = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const getAllGroups = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.groups.all, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<UserGroups> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export interface FilterGroupProps {
  memberAmount: number;
  startDate: string;
  payout: number;
  interval: ContributionFrequency;
}

export const filteredGroups = async ({
  memberAmount,
  startDate,
  payout,
  interval,
}: FilterGroupProps) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const queryString = new URLSearchParams();

  const params = {
    memberAmount: memberAmount?.toString(),
    startDate,
    payOuts: payout?.toString(),
    interval,
  };

  // Add non-empty and non-NaN parameters to the query
  Object.entries(params).forEach(([key, value]) => {
    if (value && !Number.isNaN(Number(value))) {
      queryString.set(key, value);
    }
  });

  try {
    const request = await fetch(
      `${app.groups.filterGroups}?${queryString}&sortOrder=DESC`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...HEADER_API_KEY,
        },
      },
    );

    const response: Response<UserGroups> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const getReferalLink = async (groupId: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token || !groupId) return;

  try {
    const request = await fetch(`${app.groups.share}/${groupId}`, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const response: Response<ReferalLinkResponse> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getGroup = async (groupId: string) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(`${app.groups.group}/${groupId}`, {
      method: "GET",
      headers: {
        ...HEADER_API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const response: Response<Group> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
