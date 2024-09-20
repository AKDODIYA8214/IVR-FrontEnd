import { Dispatch } from "react";

export enum IVRActionType {
  INITIALIZE_DATA = "INITIALIZE_DATA",
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
  CHANGE_EXTENTION = "CHANGE_EXTENTION",
  UPDATE_JSON_DATA = "UPDATE_JSON_DATA",
}
export interface IVRState {
  ivrName: string;
  language: string;
  ivrExtention: string;
  jsonData: Object;
}
export interface IVRAction {
  type: IVRActionType;
  payload: IVRState;
}

export type IVRContextType = {
  state: IVRState;
  dispatch: Dispatch<IVRAction>;
};
