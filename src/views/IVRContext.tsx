"use client";
import { IVRAction, IVRActionType, IVRContextType, IVRState } from "@/types/IVRContextType";
import { createContext, useReducer, useContext, Dispatch, ReactNode } from "react";

// Define the initial state

// Define the reducer function

const initialState: IVRState = { ivrName: "", language: "en", ivrExtention: "" };
function ivrContextReducer(state: IVRState, action: IVRAction): IVRState {
  switch (action.type) {
    case IVRActionType.CHANGE_NAME:
      return action.payload;
    case IVRActionType.CHANGE_LANGUAGE:
      return action.payload;
    case IVRActionType.CHANGE_EXTENTION:
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Create Context
const IVRContext = createContext<IVRContextType | undefined>(undefined);

// Create a provider component
export const IVRContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ivrContextReducer, initialState);
  return <IVRContext.Provider value={{ state, dispatch }}>{children}</IVRContext.Provider>;
};

// Create a custom hook to use the CounterContext
export const useIVRContext = () => {
  const context = useContext(IVRContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
