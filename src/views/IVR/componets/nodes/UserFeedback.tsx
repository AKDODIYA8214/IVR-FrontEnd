
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import { TbMessageUser } from "react-icons/tb";

 
const handleStyle = { left: 10 };
 
export default function UserFeedback() {

  return (
    <>
      <Card className='p-4 border border-blue-400'>
      <Handle id='target' type="target" position={Position.Left} className='!bg-yellow-500'/>
      <Handle
          id="start"
          type="source"
          position={Position.Right} // Handle on the right side
          style={{
            background: 'green',  
            borderRadius: '50%',
            position: 'absolute',
            top:'35%',           // Custom right position (a little outside the node)
          }}
        />
      <Handle id='error' type="source" position={Position.Right} style={{ 
            borderRadius: '50%',
            position: 'absolute',
            top:'65%',         
          }} className='!bg-red-500'/>
       <TbMessageUser size={30}/>
       </Card>
    </>
  );
}









