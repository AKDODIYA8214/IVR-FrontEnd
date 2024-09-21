import React, { useEffect } from "react";
import { useIVRContext } from "./IVRContext";

function IVRMain() {
  const {jsonData}=useIVRContext();
  useEffect(()=>{
   console.log(jsonData);
  },[jsonData]);
  return <div>IVRMain</div>;
}

export default IVRMain;
