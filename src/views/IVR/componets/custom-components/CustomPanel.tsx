import React, { useState } from "react";
import { CatologControlData, IntegrationControlData, OperationControlData } from "../../configs/ControllerNodeData";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Tooltip } from "@mui/material";
function CustomPanel() {
  const [isGeneralControlsOpen, setIsGeneralControlOpen] = useState(true);
  const [isOperationControlsOpen, setIsOperationControlOpen] = useState(true);
  const [isIntegrationControlsOpen, setIsIntegrationControlOpen] = useState(true);
  const [isCatalogControlsOpen, setIsCatalogControlOpen] = useState(true);
  const [isAskQuestionOpen, setIsAskQuestion] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleGeneralControl = () => {
    setIsGeneralControlOpen(!isGeneralControlsOpen);
  };

  const toggleOperationControl = () => {
    setIsOperationControlOpen(!isOperationControlsOpen);
  };

  const toggleIntegrationControl = () => {
    setIsIntegrationControlOpen(!isIntegrationControlsOpen);
  };

  const toggleCatalogControl = () => {
    setIsCatalogControlOpen(!isCatalogControlsOpen);
  };

  const filteredOperationControlData = OperationControlData.filter((controlData) => controlData.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredIntegrationControlData = IntegrationControlData.filter((controlData) => controlData.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredCatalogControlData = CatologControlData.filter((controlData) => controlData.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                {/* GENERAL CONTROLS */}
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
                and
                {/* OPERATION CONTROLS */}
                <div className="operation-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-between items-center cursor-pointer" onClick={toggleOperationControl}>
                      <span className="font-medium">Operation Controls</span>
                      {isOperationControlsOpen ? <i className="tabler-chevron-down" /> : <i className="tabler-chevron-up" />}
                    </div>
                    {isOperationControlsOpen && (
                      <div className="p-1 flex flex-wrap justify-center">
                        {filteredOperationControlData.map((controlData) => (
                          <span key={controlData.id} className="m-2 cursor-move">
                            <Tooltip title={`${controlData.name}`}>
                              <i className={`custom-${controlData.icon_name} text-2xl text-gray-600 transition duration-300 transform hover:scale-110`} onDragStart={(event) => onDragStart(event, controlData.type)} draggable />
                            </Tooltip>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* INTEGRATION CONTROLS */}
                <div className="integration-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-between items-center cursor-pointer" onClick={toggleIntegrationControl}>
                      <span className="font-medium">Integration Controls</span>
                      {isIntegrationControlsOpen ? <i className="tabler-chevron-down" /> : <i className="tabler-chevron-up" />}
                    </div>
                    {isIntegrationControlsOpen && (
                      <div className="p-1 flex flex-wrap justify-center">
                        {filteredIntegrationControlData.map((controlData) => (
                          <span key={controlData.id} className="m-2 cursor-move">
                            <Tooltip title={`${controlData.name}`}>
                              <i className={`custom-${controlData.icon_name} text-2xl text-gray-600 transition duration-300 transform hover:scale-110`} onDragStart={(event) => onDragStart(event, controlData.type)} draggable />
                            </Tooltip>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* CATALOG CONTROLS */}
                <div className="catalog-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-between items-center cursor-pointer" onClick={toggleCatalogControl}>
                      <span className="font-medium">Catalog Controls</span>
                      {isCatalogControlsOpen ? <i className="tabler-chevron-down" /> : <i className="tabler-chevron-up" />}
                    </div>
                    {isCatalogControlsOpen && (
                      <div className="px-1 py-5 flex flex-wrap justify-center">
                        {filteredCatalogControlData.map((controlData) => (
                          <span key={controlData.id} className="m-2 cursor-move">
                            <Tooltip title={`${controlData.name}`}>
                              <i className={`custom-${controlData.icon_name} text-2xl text-gray-600 transition duration-300 transform hover:scale-110`} onDragStart={(event) => onDragStart(event, controlData.type)} draggable />
                            </Tooltip>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ASK QUESTION CATEGORY */}
            {isAskQuestionOpen && (
              <>
                <div className="ask-questions-controls my-3 border rounded-xl">
                  <div className="rounded-xl overflow-hidden">
                    <div className="p-1 flex justify-center items-center cursor-pointer" onClick={() => setIsAskQuestion(!isAskQuestionOpen)}>
                      <span className="font-medium">{"⇦     "}Ask a question</span>
                    </div>
                  </div>

                  {isAskQuestionOpen && (
                    <div className="custom-send-message p-2 flex flex-wrap justify-center cursor-move" onDragStart={(event) => onDragStart(event, "AskQuestionNode")} draggable>
                      <div className="bg-orange-400 rounded-lg shadow-lg p-3">
                        <div className="flex items-center">
                          <div>
                            <div className="text-white font-bold text-sm">Question</div>
                            <div className="text-gray-900 text-xs">Ask anything to the user with required questions</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isAskQuestionOpen && (
                    <div className="custom-send-message p-2 flex flex-wrap justify-center cursor-move" onDragStart={(event) => onDragStart(event, "ButtonBasedQuestionNode")} draggable>
                      <div className="bg-orange-400 rounded-lg shadow-lg p-3">
                        <div className="flex items-center">
                          <div>
                            <div className="text-white font-bold text-sm">Buttons</div>
                            <div className="text-gray-900 text-xs">Choices based on buttons (Maximum of 3 choices)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isAskQuestionOpen && (
                    <div className="custom-send-message p-2 flex flex-wrap justify-center cursor-move" onDragStart={(event) => onDragStart(event, "ListBasedQuestionNode")} draggable>
                      <div className="bg-orange-400 rounded-lg shadow-lg p-3">
                        <div className="flex items-center">
                          <div>
                            <div className="text-white font-bold text-sm">List</div>
                            <div className="text-gray-900 text-xs">Choices based on buttons (Maximum of 10 choices)</div>
                          </div>
                        </div>
                      </div>
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
