import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import ShuffleIcon from '@mui/icons-material/Shuffle';
 
const handleStyle = { left: 10 };
 
export function QueueNode() {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
       <Handle
        id="target"
        type="target"
        position={Position.Left}
        className="!bg-yellow-500"
      />
      <Card className='p-4 border border-blue-300'>
       <ShuffleIcon className='text-blue-300' fontSize='large'/>
       </Card>
    </>
  );
}