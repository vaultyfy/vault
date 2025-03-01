import React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { ToastProvider } from "@context/toast-provider";
import { AuthProvider } from "@context/auth-provider";
import { NuqsAdapter } from "nuqs/adapters/react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <NuqsAdapter>
        <ToastProvider>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </ToastProvider>
      </NuqsAdapter>
      <React.Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </React.Suspense>
    </>
  );
}
