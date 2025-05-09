import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContextValues } from "@context/auth-provider";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { UiComponents } from "@store/ui";
import { AppSearchParams } from "./dashboard/explore/$groupId";

export interface AppContext {
  auth: AuthContextValues;
}

export const Route = createRootRouteWithContext<AppContext>()({
  component: RootComponent,
  // occasionally turn this partial return type of AppSearchParams
  // for type-safety in the Link component
  // just in dev mode though.. if not. production builds will fail
  validateSearch: (
    search: Record<string, keyof AppSearchParams>,
  ): Partial<AppSearchParams> => {
    const result: Partial<AppSearchParams> = {};
    if (search.ui) result.ui = search.ui as UiComponents;
    if (search.redirect) result.redirect = search.redirect;
    if (search.referrer) result.referrer = search.referrer;

    return result;
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
