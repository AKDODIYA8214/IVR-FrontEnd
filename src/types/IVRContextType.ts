import { Dispatch } from "react";

export enum IVRActionType {
  INITIALIZE_DATA = "INITIALIZE_DATA",
}
export interface IVRState {
  count: number;
}
export interface IVRAction {
  type: IVRActionType;
  payload: IVRState;
}

export type IVRContextType = {
  state: IVRState;
  dispatch: Dispatch<IVRAction>;
};
