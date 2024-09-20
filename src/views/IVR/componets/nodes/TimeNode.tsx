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
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/>
      <Card className='p-4 border border-blue-400'>
       <TimerIcon className='text-blue-600' fontSize='large'/>
       </Card>
    </>
  );
}