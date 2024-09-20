import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import { useCallback } from 'react';
 
const handleStyle = { left: 10 };
 
export function PlayMessageNode() {
  const onChange = useCallback((evt:any) => {
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
      <Handle id ='start' type="source" position={Position.Right} className='!bg-green-500' />
      <Card className='p-4 border border-orange-600'>
       <VolumeUpIcon className='text-orange-600' fontSize='large'/>
       </Card>
    </>
  );
}