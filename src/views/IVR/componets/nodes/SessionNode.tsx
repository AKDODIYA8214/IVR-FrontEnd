import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';

export const SessionNode = () => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/>
      <Card className='p-4 border border-blue-400'>
       <Typography className='text-blue-600' fontSize='large'>session variable</Typography>
       </Card>
    </>
  )
}
