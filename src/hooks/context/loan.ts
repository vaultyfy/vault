import React from "react";
import { FormFlowContext } from "@context/loan-provider";

export const useLoanFlow = () => {
  const context = React.useContext(FormFlowContext);

  if (context === null) {
    throw new Error(
      "Auth context is missing. You probably forgot to wrap the component depending on toast in <AuthProvider />",
    );
  }

  return context;
};
