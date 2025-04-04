import { ParsedLocation, redirect } from "@tanstack/react-router";
import { hasCookie } from "cookies-next";
import { AppContext } from "src/routes/__root";
import { DEFAULT_REDIRECT_URL, TOKEN_KEY } from "./constants";

export type RouteGuardOptions = {
  redirectUrl?: string;
  context: AppContext;
  location: ParsedLocation;
};

export const requireAuth = (
  options: Omit<RouteGuardOptions, "context" | "location"> = {},
) => {
  return ({ context, location }: Omit<RouteGuardOptions, "redirectUrl">) => {
    const redirectUrl = options.redirectUrl || DEFAULT_REDIRECT_URL;
    const hasToken = hasCookie(TOKEN_KEY);
    const token = context?.auth?.accessInfo?.token;

    if (!hasToken && !token) {
      throw redirect({
        to: redirectUrl,
        search: {
          redirect: location.href,
          // @ts-ignore
          referrer: location.search.referrer || "",
        },
      });
    }
  };
};
