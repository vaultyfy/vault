import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { GroupPayload, Response } from "@utils/types";
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

    return request;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export type JoinGroupParams = {
  groupId: number;
  referrerId?: string;
};

export const joinGroup = async (params: JoinGroupParams) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const url = new URL(`${app.groups.join}/${params.groupId}`);
  params.referrerId &&
    url.searchParams.append("referrer", String(params.referrerId));

  try {
    const request = await fetch(url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...HEADER_API_KEY,
      },
    });

    return request;
  } catch (error) {
    console.error(error);
  }
};

type ContributionParams = {
  groupId: string;
  participantId: string;
};

export const makeContribution = async (params: ContributionParams) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!params.groupId || !params.participantId)
    throw new Error("Particpant or Group ID is missing");
  if (!token) return;

  try {
    const request = await fetch(
      `${app.groups.pay}/${params.groupId}/${params.participantId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...HEADER_API_KEY,
        },
      }
    );
    return request;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};
