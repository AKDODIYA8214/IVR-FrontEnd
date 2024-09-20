import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import { Avatar, Card, Icon, SvgIcon, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const handleStyle = { left: 10 };

export function MenuNode() {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle
        id="error"
        type="target"
        position={Position.Left}
        className="!bg-red-500"
      />
      <Handle
        id="start"
        type="source"
        position={Position.Right}
        style={{
          background: "green",
          borderRadius: "50%",
          position: "absolute",
          top: "35%",
        }}
      />
      <Handle
        id="visitlimit"
        type="source"
        position={Position.Right}
        style={{
          background: "yellow",
          borderRadius: "50%",
          position: "absolute",
          top: "65%",
        }}
        className="!bg-yellow-500"
      />

      <Handle
        id="invalid"
        type="source"
        position={Position.Bottom} // Handle on the right side
        style={{
          background: "blue",
          borderRadius: "50%",
          position: "absolute",
          left: "35%", // Custom right position (a little outside the node)
        }}
      />
      <Handle
        id="timeout"
        type="source"
        position={Position.Bottom}
        style={{
          background: "pink",
          borderRadius: "50%",
          position: "absolute",
          left: "65%", // Custom right position (a little outside the node)
        }}
        className="!bg-pink-500"
      />

      <Card className="p-4 border border-orange-400">
        <MenuIcon className="text-orange-600" fontSize="large" />
      </Card>
    </>
  );
}
