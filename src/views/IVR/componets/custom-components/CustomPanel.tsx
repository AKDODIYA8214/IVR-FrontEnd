import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { SvgIcon, Tooltip } from "@mui/material";
import { GenralControlData } from "@/views/IVR/configs/ControllerNodeData";
function CustomPanel() {
  const [isGeneralControlsOpen, setIsGeneralControlOpen] = useState(true);
  const [isAskQuestionOpen, setIsAskQuestion] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
            <div className="search-box">
              <input type="text" placeholder="Search for controls..." className="w-full p-2 border rounded-xl transition duration-300 transform hover:scale-105" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            {!isAskQuestionOpen && (
              <>
                <div className="general-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-between items-center cursor-pointer bg-purple-400" onClick={toggleGeneralControl}>
                      <span className="font-medium">General Controls</span>
                      {isGeneralControlsOpen ? (
                        <SvgIcon>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
                          </svg>
                        </SvgIcon>
                      ) : (
                        <SvgIcon>
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
