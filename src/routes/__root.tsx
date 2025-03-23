import React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { AuthContextValues } from "@context/auth-provider";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export interface AppContext {
  auth: AuthContextValues;
}

export const Route = createRootRouteWithContext<AppContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
