// // shared/context/FormFlowContext.tsx
// import { createContext, useContext, useReducer } from "react";

// type FormStep = "step_1" | "step_2" | "step_3";
// type EligibilityStatus = "eligible" | "ineligible" | null;
// type AcceptanceStatus = "accepted" | "rejected" | null;

// type FormFlowState = {
//   completedSteps: FormStep[];
//   activeStep: FormStep;
//   formData: {
//     step_1: Record<string, any>;
//     step_2: Record<string, any>;
//     step_3: Record<string, any>;
//   };
//   eligibilityStatus: EligibilityStatus;
//   acceptanceStatus: AcceptanceStatus;
//   rejectionReason?: string;
// };

// type FormFlowActions =
//   | { type: "SET_ACTIVE_STEP"; payload: FormStep }
//   | { type: "COMPLETE_STEP"; payload: FormStep }
//   | { type: "UPDATE_FORM_DATA"; payload: { step: FormStep; data: any } }
//   | { type: "SET_ELIGIBILITY"; payload: EligibilityStatus }
//   | {
//       type: "SET_ACCEPTANCE";
//       payload: { status: AcceptanceStatus; reason?: string };
//     }
//   | { type: "RESET_FORM" };

// const initialState: FormFlowState = {
//   completedSteps: [],
//   activeStep: "step_1",
//   formData: {
//     step_1: {},
//     step_2: {},
//     step_3: {},
//   },
//   eligibilityStatus: null,
//   acceptanceStatus: null,
// };

// const formFlowReducer = (
//   state: FormFlowState,
//   action: FormFlowActions,
// ): FormFlowState => {
//   switch (action.type) {
//     case "SET_ACTIVE_STEP":
//       return {
//         ...state,
//         activeStep: action.payload,
//       };
//     case "COMPLETE_STEP":
//       return {
//         ...state,
//         completedSteps: state.completedSteps.includes(action.payload)
//           ? state.completedSteps
//           : [...state.completedSteps, action.payload],
//       };
//     case "UPDATE_FORM_DATA":
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           [action.payload.step]: action.payload.data,
//         },
//       };
//     case "SET_ELIGIBILITY":
//       return {
//         ...state,
//         eligibilityStatus: action.payload,
//         completedSteps:
//           action.payload === "eligible"
//             ? ["step_1", "step_2"]
//             : state.completedSteps,
//       };
//     case "SET_ACCEPTANCE":
//       return {
//         ...state,
//         acceptanceStatus: action.payload.status,
//         rejectionReason: action.payload.reason,
//         completedSteps:
//           action.payload.status === "accepted"
//             ? [...state.completedSteps, "step_3"]
//             : state.completedSteps,
//       };
//     case "RESET_FORM":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const FormFlowContext = createContext<{
//   state: FormFlowState;
//   dispatch: React.Dispatch<FormFlowActions>;
// }>({
//   state: initialState,
//   dispatch: () => null,
// });

// export const FormFlowProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [state, dispatch] = useReducer(formFlowReducer, initialState);

//   const setActiveStep = (step: FormStep) => {
//     dispatch({ type: "SET_ACTIVE_STEP", payload: step });
//   };

//   const completeStep = (step: FormStep) => {
//     dispatch({ type: "COMPLETE_STEP", payload: step });
//   };

//   const updateFormData = (step: FormStep, data: any) => {
//     dispatch({ type: "UPDATE_FORM_DATA", payload: { step, data } });
//   };

//   const setEligibility = (status: EligibilityStatus) => {
//     dispatch({ type: "SET_ELIGIBILITY", payload: status });
//   };

//   const setAcceptance = (status: AcceptanceStatus, reason?: string) => {
//     dispatch({ type: "SET_ACCEPTANCE", payload: { status, reason } });
//   };

//   const resetForm = () => {
//     dispatch({ type: "RESET_FORM" });
//   };

//   const value = {
//     state,
//     dispatch: {
//       setActiveStep,
//       completeStep,
//       updateFormData,
//       setEligibility,
//       setAcceptance,
//       resetForm,
//     },
//   };

//   return (
//     <FormFlowContext.Provider value={value}>
//       {children}
//     </FormFlowContext.Provider>
//   );
// };

import { createContext, useContext, useReducer, ReactNode } from "react";

// Define your types
export type FormStep = "step_1" | "step_2" | "step_3";
type EligibilityStatus = "eligible" | "ineligible" | null;
type AcceptanceStatus = "accepted" | "rejected" | null;

interface FormFlowState {
  completedSteps: FormStep[];
  activeStep: FormStep;
  formData: {
    step_1: Record<string, any>;
    step_2: Record<string, any>;
    step_3: Record<string, any>;
  };
  eligibilityStatus: EligibilityStatus;
  acceptanceStatus: AcceptanceStatus;
  rejectionReason?: string;
}

type FormFlowActions =
  | { type: "SET_ACTIVE_STEP"; payload: FormStep }
  | { type: "COMPLETE_STEP"; payload: FormStep }
  | { type: "UPDATE_FORM_DATA"; payload: { step: FormStep; data: any } }
  | { type: "SET_ELIGIBILITY"; payload: EligibilityStatus }
  | {
      type: "SET_ACCEPTANCE";
      payload: { status: AcceptanceStatus; reason?: string };
    }
  | { type: "RESET_FORM" };

// Define the context value type
interface FormFlowContextValue {
  state: FormFlowState;
  dispatch: {
    setActiveStep: (step: FormStep) => void;
    completeStep: (step: FormStep) => void;
    updateFormData: (step: FormStep, data: any) => void;
    setEligibility: (status: EligibilityStatus) => void;
    setAcceptance: (status: AcceptanceStatus, reason?: string) => void;
    resetForm: () => void;
  };
}

const initialState: FormFlowState = {
  completedSteps: [],
  activeStep: "step_1",
  formData: {
    step_1: {},
    step_2: {},
    step_3: {},
  },
  eligibilityStatus: null,
  acceptanceStatus: null,
};

const formFlowReducer = (
  state: FormFlowState,
  action: FormFlowActions,
): FormFlowState => {
  switch (action.type) {
    case "SET_ACTIVE_STEP":
      return { ...state, activeStep: action.payload };
    case "COMPLETE_STEP":
      return {
        ...state,
        completedSteps: state.completedSteps.includes(action.payload)
          ? state.completedSteps
          : [...state.completedSteps, action.payload],
      };
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.step]: action.payload.data,
        },
      };
    case "SET_ELIGIBILITY":
      return {
        ...state,
        eligibilityStatus: action.payload,
        completedSteps:
          action.payload === "eligible"
            ? ["step_1", "step_2"]
            : state.completedSteps,
      };
    case "SET_ACCEPTANCE":
      return {
        ...state,
        acceptanceStatus: action.payload.status,
        rejectionReason: action.payload.reason,
        completedSteps:
          action.payload.status === "accepted"
            ? [...state.completedSteps, "step_3"]
            : state.completedSteps,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

// Create context with the proper type
export const FormFlowContext = createContext<FormFlowContextValue>({
  state: initialState,
  dispatch: {
    setActiveStep: () => {},
    completeStep: () => {},
    updateFormData: () => {},
    setEligibility: () => {},
    setAcceptance: () => {},
    resetForm: () => {},
  },
});

export const FormFlowProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formFlowReducer, initialState);

  // Action creators
  const setActiveStep = (step: FormStep) => {
    dispatch({ type: "SET_ACTIVE_STEP", payload: step });
  };

  const completeStep = (step: FormStep) => {
    dispatch({ type: "COMPLETE_STEP", payload: step });
  };

  const updateFormData = (step: FormStep, data: any) => {
    dispatch({ type: "UPDATE_FORM_DATA", payload: { step, data } });
  };

  const setEligibility = (status: EligibilityStatus) => {
    dispatch({ type: "SET_ELIGIBILITY", payload: status });
  };

  const setAcceptance = (status: AcceptanceStatus, reason?: string) => {
    dispatch({ type: "SET_ACCEPTANCE", payload: { status, reason } });
  };

  const resetForm = () => {
    dispatch({ type: "RESET_FORM" });
  };

  // Context value
  const value = {
    state,
    dispatch: {
      setActiveStep,
      completeStep,
      updateFormData,
      setEligibility,
      setAcceptance,
      resetForm,
    },
  };

  return (
    <FormFlowContext.Provider value={value}>
      {children}
    </FormFlowContext.Provider>
  );
};
