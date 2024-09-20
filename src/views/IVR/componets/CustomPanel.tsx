import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { TextField, SvgIcon, Tooltip, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { GenralControlData } from "@/views/IVR/configs/ControllerNodeData";
import { useIVRContext } from "@/views/IVRContext";
import { IVRActionType } from "@/types/IVRContextType";
import { languages } from "@/data/languages";
import { languageType } from "@/types/DataType";
function CustomPanel() {
  const { state, dispatch } = useIVRContext();
  const [isGeneralControlsOpen, setIsGeneralControlOpen] = useState(true);
  const [isAskQuestionOpen, setIsAskQuestion] = useState(false);

  const toggleGeneralControl = () => {
    setIsGeneralControlOpen(!isGeneralControlsOpen);
  };

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
            <FormControl variant="outlined" size="small" fullWidth className="my-3">
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

            {!isAskQuestionOpen && (
              <>
                <div className="general-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-between items-center cursor-pointer bg-blue-400" onClick={toggleGeneralControl}>
                      <span className="font-medium text-white">General Controls</span>
                      {isGeneralControlsOpen ? (
                        <SvgIcon className="text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
                          </svg>
                        </SvgIcon>
                      ) : (
                        <SvgIcon className="text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z" />
                          </svg>
                        </SvgIcon>
                      )}
                    </div>
                  </div>
                  {isGeneralControlsOpen && (
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
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default CustomPanel;
