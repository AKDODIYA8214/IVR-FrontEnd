"use client";
import React, { useCallback, useState } from "react";
import { ReactFlow, Controls, Background, Panel, useNodesState, useEdgesState, addEdge, applyNodeChanges, applyEdgeChanges, ReactFlowProvider, MiniMap, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomPanel from "./IVR/componets/CustomPanel";
import { Box, Card } from "@mui/material";
import { IVRContextProvider } from "./IVRContext";
import IVRNode from "./IVR/componets/nodes/IVRNode";
import { TimeNode } from "./IVR/componets/nodes/TimeNode";
import APINode from "./IVR/componets/nodes/ApiNode";
import UserFeedback from "./IVR/componets/nodes/UserFeedback";
import CaseWhen from "./IVR/componets/nodes/CaseWhen";
import {v4 as uuidv4} from 'uuid';
import { isGeneratorFunction } from "util/types";
import { HangupNode } from "./IVR/componets/nodes/HangupNode";
import { MenuNode } from "./IVR/componets/nodes/MenuNode";
import { QueueNode } from "./IVR/componets/nodes/QueueNode";
import { PlayMessageNode } from "./IVR/componets/nodes/PlayMessageNode";
import { LuaNode } from "./IVR/componets/nodes/LuaNode";
import { UserinputNode } from "./IVR/componets/nodes/UserinputNode";
import { TtsNode } from "./IVR/componets/nodes/TtsNode";
import { LangNode } from "./IVR/componets/nodes/LangNode";
import PhoneCallbackSharp from "@mui/icons-material/PhoneCallbackSharp";
import { CallbackNode } from "./IVR/componets/nodes/CallbackNode";
import { SessionNode } from "./IVR/componets/nodes/SessionNode";

const nodeTypes = {
  luanode: LuaNode,
  ivrnode: IVRNode,
  timenode: TimeNode,
  apinode: APINode,
  userfeedback: UserFeedback,
  casewhen: CaseWhen,
  hangupnode: HangupNode,
  menunode: MenuNode,
  queuenode: QueueNode,
  playmessagenode: PlayMessageNode,
  userinputnode:UserinputNode,
  ttsnode:TtsNode,
  langnode:LangNode,  
  callbacknode:CallbackNode,
  sessionnode:SessionNode
};

const defaultEdgeOptions = {
  animated: true,
};

const initialNodes: any[] = [];

let id = 0;
const getId = () => uuidv4();
const nodeMap=new Map();
export default function IVRAddEditView() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);

  // const onConnect = useCallback((connection: any) => setEdges((eds: any) => addEdge({ ...connection, type: "simplebezier" }, eds) as any), [setEdges]);

  const onNodesChange = useCallback((changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);

  const onEdgesChange = useCallback((changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onConnect = useCallback((connection: any) => {
    setEdges((prevEdges: any) => {
      const { source, target, sourceHandle, targetHandle } = connection;
      console.log(sourceHandle)
      console.log(targetHandle)
  
      const customEdgeId = `${source}-${target}`;
     const {edgesConnection,edgesError,allwoedMultiple}=nodeMap.get(source);
     console.log(edges);
     console.log(allwoedMultiple);
      if(edgesError>0||(edgesConnection>0&&allwoedMultiple===false)){
        return ;
      }
      nodeMap.get(source)['edges']++;
      const newEdge = {
        ...connection,
        id: customEdgeId,
        type: "simplebezier",
      };
      
      
      return [...prevEdges, newEdge];
    });
  }, [nodes, setEdges]); 
  
  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      console.log(event.dataTransfer.getData("application/reactflow"));
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const uid=getId();
      const newNode = {
        id: uid,
        type: type,
        position,
        data: { label: `${type} node` },
      };
      console.log(newNode);

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeClick = (event: any, node: any) => {
    console.log("Node clicked:", node);
  };

  const proOptions = { hideAttribution: true };
  const defaultViewport = { x: 0, y: 0, zoom: 1.8 };
  return (
    <IVRContextProvider>
      <Card className="h-full w-full">
        <div className="flex h-full w-full  min-h-[500px] max-h-[100vh]">
          <div className="w-1/6">
            <CustomPanel />
          </div>
          <div className="w-5/6 p-1 h-full">
            <Box className={`border border-solid overflow-hidden h-full`}>
              <ReactFlowProvider>
                <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodeClick={onNodeClick} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} proOptions={proOptions} onConnect={onConnect} onDrop={onDrop} onDragOver={onDragOver} onInit={setReactFlowInstance} defaultViewport={defaultViewport} defaultEdgeOptions={defaultEdgeOptions} fitView>
                  <MiniMap nodeStrokeWidth={3} nodeColor="#e2e2e2" maskColor="rgb(240, 230, 240, 0.6)" zoomable pannable />
                  <Controls />
                  <Background variant={BackgroundVariant.Dots} color="#dedede" gap={60} size={3} />
                </ReactFlow>
              </ReactFlowProvider>
            </Box>
          </div>
        </div>
      </Card>
    </IVRContextProvider>
  );
}
