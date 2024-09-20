"use client";
import React, { useCallback, useState } from "react";
import { ReactFlow, Controls, Background, Panel, useNodesState, useEdgesState, addEdge, applyNodeChanges, applyEdgeChanges, ReactFlowProvider, MiniMap, BackgroundVariant } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomPanel from "./IVR/componets/CustomPanel";
import { Box, Card } from "@mui/material";
import { IVRContextProvider, useIVRContext } from "./IVRContext";
import IVRNode from "./IVR/componets/nodes/IVRNode";
import { TimeNode } from "./IVR/componets/nodes/TimeNode";
import APINode from "./IVR/componets/nodes/ApiNode";
import UserFeedback from "./IVR/componets/nodes/UserFeedback";
import CaseWhen from "./IVR/componets/nodes/CaseWhen";
import { v4 as uuidv4 } from "uuid";
import { HangupNode } from "./IVR/componets/nodes/HangupNode";
import { MenuNode } from "./IVR/componets/nodes/MenuNode";
import { QueueNode } from "./IVR/componets/nodes/QueueNode";
import { PlayMessageNode } from "./IVR/componets/nodes/PlayMessageNode";
import { LuaNode } from "./IVR/componets/nodes/LuaNode";
import { UserinputNode } from "./IVR/componets/nodes/UserinputNode";
import { TtsNode } from "./IVR/componets/nodes/TtsNode";
import { LangNode } from "./IVR/componets/nodes/LangNode";
import { CallbackNode } from "./IVR/componets/nodes/CallbackNode";
import { SessionNode } from "./IVR/componets/nodes/SessionNode";
import CustomDrawer from "./IVR/drawer/CustomDrawer";
import { IVRActionType } from "@/types/IVRContextType";

export interface drawerProps {
  open: boolean;
  node: any;
  onClose: () => void;
  setData: (data: any) => void;
}
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
  userinputnode: UserinputNode,
  ttsnode: TtsNode,
  langnode: LangNode,
  callbacknode: CallbackNode,
  sessionnode: SessionNode,
};

const defaultEdgeOptions = {
  animated: true,
};

const initialNodes: any[] = [];

let id = 0;
const getId = () => uuidv4();
const nodeMap = new Map();
export default function IVRAddEditView() {
  const { state, dispatch } = useIVRContext();
  const [nodes, setNodes] = useNodesState<any>(initialNodes);
  const [edges, setEdges] = useEdgesState<any>([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);
  const [drawer, setDrawer] = useState<drawerProps>({ open: false, node: null, onClose: () => {}, setData: () => {} });
  const closeDrawer = () => {
    setDrawer({ open: false, node: null, onClose: () => {}, setData: () => {} });
  };

  // const onConnect = useCallback((connection: any) => setEdges((eds: any) => addEdge({ ...connection, type: "simplebezier" }, eds) as any), [setEdges]);

  const onNodesChange = useCallback((changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);

  const onEdgesChange = useCallback((changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  const validate = (node: any, source: any) => {
    if (source == "error" && node.error > 0) return false;
    else if (source == "timeout" && node.timeout > 0) return false;
    else if (source == "invalid" && node.invalid > 0) return false;
    else if (source == "target" && node.target >= 0) return false;
    else if (source == "visitlimit" && node.visitlimit > 0) return false;
    else if (source == "start-menu" && node.source > 10) return false;
    else if (source == "start-menu-timenode" && node.source > 2) return false;
    else if (source == "start" && node.source > 0) return false;
    else return true;
  };
  const onConnect = useCallback(
    (connection: any) => {
      setEdges((prevEdges: any[]) => {
        const { source, target, sourceHandle, targetHandle } = connection;

        const nodeValidation = nodeMap.get(source);
        console.log(nodeValidation);
        if (!validate(nodeValidation, sourceHandle)) {
          return prevEdges;
        }

        //  nodeValidation
        console.log(sourceHandle);
        if (sourceHandle == "error") nodeMap.get(source)["error"]++;
        else if (sourceHandle == "timeout") nodeMap.get(source)["timeout"]++;
        else if (sourceHandle == "invalid") nodeMap.get(source)["invalid"]++;
        else if (sourceHandle == "target") nodeMap.get(source)["target"]++;
        else if (sourceHandle == "visitlimit") nodeMap.get(source)["visitlimit"]++;
        else if (sourceHandle == "start-menu" || sourceHandle == "start-menu-timenode" || sourceHandle == "start") nodeMap.get(source)["source"]++;
        const customEdgeId = `${source}-${target}`;
        const newEdge = {
          ...connection,
          id: customEdgeId,
          type: "simplebezier",
        };

        return [...prevEdges, newEdge];
      });
    },
    [nodes, setEdges]
  );

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
      const uid = getId();
      const newNode = {
        id: uid,
        type: type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
      nodeMap.set(uid, { error: 0, visitlimit: 0, source: 0, target: 0, invalid: 0, timeout: 0 });
    },
    [reactFlowInstance]
  );

  const onNodeClick = (event: any, node: any) => {
    console.log("Node clicked:", { event }, { node });
    setDrawer({
      open: true,
      node: node,
      onClose: closeDrawer,
      setData: (data) => {
        dispatch({ type: IVRActionType.UPDATE_JSON_DATA, payload: { ...state, jsonData: data } });
      },
    });
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
      <CustomDrawer drawer={drawer}></CustomDrawer>
    </IVRContextProvider>
  );
}
