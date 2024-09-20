"use client";
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { TextField, SvgIcon, Tooltip, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { GenralControlData } from "@/views/IVR/configs/ControllerNodeData";
import { useIVRContext } from "@/views/IVRContext";
import { IVRActionType } from "@/types/IVRContextType";
import { languages } from "@/data/languages";
import { languageType } from "@/types/DataType";
import { useRouter } from "next/navigation";
function CustomPanel() {
  const { state, dispatch } = useIVRContext();
  const router = useRouter();
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
  };

  return (
    <div>
      <PerfectScrollbar className="max-h-[calc(100vh-150px)]" key={0}>
        <div className="p-3">
          <div className="controller-container">
            <TextField
              value={state.ivrName}
              label="IVR Name"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e: any) => {
                dispatch({ type: IVRActionType.CHANGE_NAME, payload: { ...state, ivrName: e.target.value } });
              }}
            />
            <TextField
              value={state.ivrExtention}
              label="IVR Extension"
              variant="outlined"
              size="small"
              className="mt-3"
              fullWidth
              disabled
              onChange={(e: any) => {
                dispatch({ type: IVRActionType.CHANGE_EXTENTION, payload: { ...state, ivrExtention: e.target.value } });
              }}
            />
            <FormControl variant="outlined" size="small" fullWidth className="mt-3">
              <InputLabel>IVR Default Language</InputLabel>
              <Select
                value={state.language}
                label={"IVR Default Language"}
                onChange={(e: any) => {
                  dispatch({ type: IVRActionType.CHANGE_LANGUAGE, payload: { ...state, language: e.target.value } });
                }}
              >
                {languages.map((language: languageType, index: number) => {
                  return (
                    <MenuItem key={language.label + index + ""} value={language.value}>
                      {language.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <div className="flex justify-start items-center w-full gap-2 mt-3">
              <Button variant="contained" color="primary" size="small">
                Save
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => {
                  router.push("/");
                }}
              >
                cancel
              </Button>
            </div>

            <div className="general-controls my-3 border rounded-xl">
              <div className="rounded-xl rounded-b-none overflow-hidden">
                <div className="p-1  flex justify-between items-center cursor-pointer bg-blue-500">
                  <span className="font-medium text-white">General Controls</span>
                </div>
              </div>
              <div className="p-1 flex flex-wrap justify-center">
                {GenralControlData.map((controlData: any) => (
                  <span key={controlData.id} className="m-2 cursor-move">
                    <Tooltip title={`${controlData.name}`}>
                      <div className={` border text-2xl text-gray-600 transition duration-300 transform hover:scale-110 `} onDragStart={(event: any) => onDragStart(event, controlData.type)} draggable>
                        <SvgIcon className="h-[50px] w-[50px]">{controlData.svg}</SvgIcon>
                      </div>
                    </Tooltip>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default CustomPanel;
