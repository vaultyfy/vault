import * as React from "react";
import {
  LoanStepFlowContextType,
  LoanStepFlowContext,
} from "@context/loan-tabs-provider";

// Hook to consume context
export const useLoanStepFlow = (): LoanStepFlowContextType => {
  const context = React.useContext(LoanStepFlowContext);
  if (!context)
    throw new Error(
      "useLoanStepFlow must be used within a LoanStepFlowProvider",
    );
  return context;
};
