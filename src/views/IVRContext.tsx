"use client";
import {  IVRAction, IVRActionType, IVRContextType, IVRState } from "@/types/IVRContextType";
import { createContext, useReducer, useContext, Dispatch, ReactNode, act } from "react";

const initialState: IVRState = { ivrName: "", language: "en", ivrExtention: "", jsonData:{} };
function ivrContextReducer(state: IVRState, action: IVRAction): IVRState {
  console.log('-------------------------------------->');
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case IVRActionType.CHANGE_NAME:
      return {...state,language:action.payload.ivrName};
    case IVRActionType.CHANGE_LANGUAGE:
      return {...state,language:action.payload.language};
    case IVRActionType.CHANGE_EXTENTION:
      return {...state,ivrExtention:action.payload.ivrExtention};
      case IVRActionType.UPDATE_JSON_DATA:
      return {...state,jsonData:action.payload.jsonData};
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
  return useContext(IVRContext);
};
