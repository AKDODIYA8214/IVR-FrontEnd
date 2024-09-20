import React, { useState } from "react";
import { CatologControlData, IntegrationControlData, OperationControlData } from "../../configs/ControllerNodeData";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Tooltip } from "@mui/material";
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
                    <div className="p-1 flex justify-between items-center cursor-pointer" onClick={toggleGeneralControl}>
                      <span className="font-medium">General Controls</span>
                      {isGeneralControlsOpen ? <i className="tabler-chevron-down" /> : <i className="tabler-chevron-up" />}
                    </div>

                    {isGeneralControlsOpen && (
                      <div className="custom-send-message p-2 flex flex-wrap justify-center cursor-move" onDragStart={(event) => onDragStart(event, "SendMessageNode")} draggable>
                        <div className="bg-red-500 rounded-lg shadow-lg p-3">
                          <div className="flex items-center">
                            <div>
                              <div className="text-white font-bold text-sm">Send a message</div>
                              <div className="text-gray-900 text-xs">With no response required from visitor</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {isGeneralControlsOpen && (
                      <div className="custom-ask-question p-2 flex flex-wrap justify-center cursor-pointer" onClick={() => setIsAskQuestion(!isAskQuestionOpen)}>
                        <div className="bg-orange-400 rounded-lg shadow-lg p-3">
                          <div className="flex items-center">
                            <div>
                              <div className="text-white font-bold text-sm">Ask Question</div>
                              <div className="text-gray-900 text-xs">Ask questions and store user Input in variable</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {isGeneralControlsOpen && (
                      <div className="custom-set-condition p-2 flex flex-wrap justify-center cursor-move" onDragStart={(event) => onDragStart(event, "setCondition")} draggable>
                        <div className="bg-blue-500 rounded-lg shadow-lg p-3">
                          <div className="flex items-center">
                            <div>
                              <div className="text-white font-bold text-sm">Set a condition</div>
                              <div className="text-gray-900 text-xs">Send Message(s) based on logical(s) conditions</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
