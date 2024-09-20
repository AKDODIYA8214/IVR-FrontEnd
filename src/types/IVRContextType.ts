import { Dispatch } from "react";

export enum IVRActionType {
  INITIALIZE_DATA = "INITIALIZE_DATA",
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
  CHANGE_EXTENTION = "CHANGE_EXTENTION",
}
export interface IVRState {
  ivrName: string;
  language: string;
  ivrExtention: string;
}
export interface IVRAction {
  type: IVRActionType;
  payload: IVRState;
}

export type IVRContextType = {
  state: IVRState;
  dispatch: Dispatch<IVRAction>;
};
