import { cookieOptions, HEADER_API_KEY, TOKEN_KEY } from "@utils/constants";
import { app } from "@utils/endpoints";
import { getCookie } from "cookies-next";
import { Response, LoanPayload } from "@utils/types";

export const getAllLoan = async () => {
  const token = getCookie(TOKEN_KEY, { ...cookieOptions });
  if (!token) return;

  try {
    const request = await fetch(app.loan.allMyLoans, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...HEADER_API_KEY,
      },
    });
    const response: Response<LoanPayload> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
