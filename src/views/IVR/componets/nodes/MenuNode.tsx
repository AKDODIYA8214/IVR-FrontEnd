import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
 
const handleStyle = { left: 10 };
 
export function MenuNode() {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      {/* <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/> */}
      <Card className='p-4 border border-orange-400'>
       <MenuIcon className='text-orange-600' fontSize='large'/>
       </Card>
    </>
  );
}