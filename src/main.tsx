import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import "@style/global.scss";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@config/theme";
import { AuthProvider, initialState } from "@context/auth-provider";
import { routeTree } from "./routeTree.gen";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ToastProvider } from "@context/toast-provider";
import { useAuthContext } from "@hooks/context";
import { LoanStepFlowProvider } from "@context/loan-tabs-provider";
import React from "react";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: initialState,
  },
});

const App = () => {
  const auth = useAuthContext();
  const routerContext = React.useMemo(() => {
    return {
      ...auth,
    };
  }, [auth]);
  return <RouterProvider router={router} context={{ auth: routerContext }} />;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <NuqsAdapter>
          <ToastProvider>
            <AuthProvider>
              <LoanStepFlowProvider>
                <App />
              </LoanStepFlowProvider>
            </AuthProvider>
          </ToastProvider>
        </NuqsAdapter>
      </ChakraProvider>
    </HelmetProvider>
  );
}
