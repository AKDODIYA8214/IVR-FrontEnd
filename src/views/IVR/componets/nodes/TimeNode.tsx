import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
 
const handleStyle = { left: 10 };
 
export function TimeNode() {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle id='target' type="target" position={Position.Left} className='!bg-yellow-500' /> 
      <Handle id='timeout' type="source" position={Position.Bottom} className='!bg-pink-500'/>
      <Handle id ='start-menu-timenode' type="source" position={Position.Right} className='!bg-green-500' />
      <Card className='p-4 border border-blue-400'>
       <TimerIcon className='text-blue-600' fontSize='large'/>
       </Card>
    </>
  );
}