import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import CallEndIcon from '@mui/icons-material/CallEnd';
 
const handleStyle = { left: 10 };
 
export function HangupNode() {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
    <Handle id='error' type="target" position={Position.Left} className='!bg-red-500'/>
      <Card className='p-4 border border-red-400'>
       <CallEndIcon className='text-red-600' fontSize='large'/>
       </Card>
    </>
  );
}