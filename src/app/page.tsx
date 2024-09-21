'use client'
import IVRAddEditView from "@/views/IVRAddEditView";
import { IVRContextProvider, useIVRContext } from "@/views/IVRContext";
import IVRMain from "@/views/IVRMainPage";
import { useEffect } from "react";

export default function Home() {

  return  <IVRContextProvider> <IVRMain /></IVRContextProvider> ;

}
