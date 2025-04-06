import { useLoanFlow } from "./context/loan";
import { FormStep } from "@context/loan-provider";

export const useTabs = (
  eligibilityStatus: "eligible" | "ineligible" | null = null,
) => {
  const { state, dispatch } = useLoanFlow();

  // Auto-fill first two steps if eligible
  const handleEligibility = () => {
    if (eligibilityStatus === "eligible") {
      dispatch.completeStep("step_1");
      dispatch.completeStep("step_2");
      dispatch.setActiveStep("step_2");
    }
  };

  const canActivateTab = (step: FormStep): boolean => {
    // Check if previous steps are completed
    switch (step) {
      case "step_1":
        return true; // Always allow access to first step
      case "step_2":
        return (
          state.completedSteps.includes("step_1") ||
          state.eligibilityStatus === "eligible"
        );
      case "step_3":
        return (
          state.completedSteps.includes("step_2") ||
          state.acceptanceStatus === "accepted"
        );
      default:
        return false;
    }
  };

  const activateTab = (step: FormStep) => {
    if (canActivateTab(step)) {
      dispatch.setActiveStep(step);
    }
  };

  const isStepCompleted = (step: FormStep): boolean => {
    return state.completedSteps.includes(step);
  };

  const isCurrentStepValid = (): boolean => {
    // Check if current step's form data exists
    return Object.keys(state.formData[state.activeStep]).length > 0;
  };

  return {
    activeStep: state.activeStep,
    formData: state.formData,
    activateTab,
    isStepCompleted,
    canActivateTab,
    handleEligibility,
    isCurrentStepValid,
    completedSteps: state.completedSteps,
  };
};
