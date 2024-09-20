"use client";
import React from "react";
import { IVRContextProvider } from "./IVRContext";
import IVRAddEditView from "./IVRAddEditView";

export default function IVRWithContext() {
  return (
    <IVRContextProvider>
      <IVRAddEditView></IVRAddEditView>
    </IVRContextProvider>
  );
}
