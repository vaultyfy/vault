import React, { createContext, useContext, useMemo, useState } from "react";
import { LoanStep, allLoanSteps } from "@utils/types";
import { useUiComponentStore } from "@store/ui";

export type LoanStepFlowContextType = {
  activeStep: LoanStep;
  completedSteps: LoanStep[];
  setActiveStep: (step: LoanStep) => void;
  completeStep: (step: LoanStep | LoanStep[]) => void;
  resetSteps: () => void;
};

export const LoanStepFlowContext = createContext<
  LoanStepFlowContextType | undefined
>(undefined);

export const LoanStepFlowProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { store, updateUiStore } = useUiComponentStore();
  const activeStep = store.ui as LoanStep;

  const [completedSteps, setCompletedSteps] = useState<LoanStep[]>([
    "loan-purpose",
  ]);

  const setActiveStep = (step: LoanStep) => {
    if (allLoanSteps.includes(step)) {
      updateUiStore({ ui: step });
    }
  };

  const completeStep = (step: LoanStep | LoanStep[]) => {
    setCompletedSteps((prev) => {
      const stepsToAdd = Array.isArray(step) ? step : [step];
      const uniqueSteps = stepsToAdd.filter((s) => !prev.includes(s));
      return [...prev, ...uniqueSteps];
    });
  };

  const resetSteps = () => {
    updateUiStore({ ui: "loan-purpose" });
    setCompletedSteps([]);
  };

  const value = useMemo(
    () => ({
      activeStep,
      completedSteps,
      setActiveStep,
      completeStep,
      resetSteps,
    }),
    [activeStep, completedSteps],
  );

  return (
    <LoanStepFlowContext.Provider value={value}>
      {children}
    </LoanStepFlowContext.Provider>
  );
};
