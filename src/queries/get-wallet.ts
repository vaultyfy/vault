import { app } from "@utils/endpoints";
import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { ExpectedReturns, RemainingContributions, Response, Wallet } from "@utils/types";
import { getCookie } from "cookies-next";

export const getWallet = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;
  try {
    const request = await fetch(app.customer.wallet, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<Wallet> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export const getExpectedReturns = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.customer.expectedReturns, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<ExpectedReturns> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
};

export type RemainingContributionsParams = {
  filter?: "year" | "month"
}

export const getRemainingContributions = async (params: RemainingContributionsParams) => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  const url = new URL(app.customer.remainingContributions)
  params.filter && url.searchParams.append("filterType", params.filter)

  try {
    const request = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });

    const response: Response<RemainingContributions> = await request.json();
    return response;
  } catch (error) {
    console.error(`${(error as Error).message}`);
  }
}
