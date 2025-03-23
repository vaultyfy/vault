import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContextValues } from "@context/auth-provider";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { UiComponents } from "@store/ui";
import { DEFAULT_REDIRECT_URL } from "@utils/constants";
import { AppSearchParams } from "./dashboard/explore/$groupId";

export interface AppContext {
  auth: AuthContextValues;
}

export const Route = createRootRouteWithContext<AppContext>()({
  component: RootComponent,
  validateSearch: (search: Record<string, keyof AppSearchParams>): AppSearchParams => {
    return {
      ui: search.ui as UiComponents,
      redirect: search.redirect,
      referrer: search.referrer,
    };
  },
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
