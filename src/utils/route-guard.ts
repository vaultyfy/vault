import { ParsedLocation, redirect } from "@tanstack/react-router";
import { hasCookie } from "cookies-next";
import { AppContext } from "src/routes/__root";
import { TOKEN_KEY } from "./constants";

export type RouteGuardOptions = {
  redirectUrl?: string;
  context: AppContext;
  location: ParsedLocation;
};

export const requireAuth = (
  options: Omit<RouteGuardOptions, "context" | "location"> = {},
) => {
  return ({ context, location }: Omit<RouteGuardOptions, "redirectUrl">) => {
    const redirectUrl = options.redirectUrl || "/auth/login";
    const hasToken = hasCookie(TOKEN_KEY);
    const token = context?.auth?.accessInfo?.token;

    if (!hasToken && !token) {
      throw redirect({
        to: redirectUrl,
        search: {
          redirect: location.href,
        },
      });
    }
  };
};
