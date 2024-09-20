import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import { VscVariableGroup } from "react-icons/vsc";


export const SessionNode = () => {
  return (
    <>
      <Handle id='target' type="target" position={Position.Left} />
      <Handle id='start' type="source" position={Position.Right} />
      <Card className='p-4 border border-blue-400'>
       <VscVariableGroup />

       </Card>
    </>
  )
}
