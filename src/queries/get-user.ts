import { auth } from "@utils/endpoints";
import { Response, User } from "@utils/types";

export const getUser = async () => {
  try {
    const request = await fetch(auth.customer.profile, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response: Response<User> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
