import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
 
const handleStyle = { left: 10 };
 
export default function IVRNode() {

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/>
      <Card className='p-4 border border-blue-400'>
       <Typography className='text-blue-600' fontSize='large'>IVR</Typography>
       </Card>
    </>
  );
}












// import React from 'react'; 
// import { Box, Card, Typography, IconButton, Avatar } from '@mui/material';
// // import PhoneIcon from '@mui/icons-material/Phone';
// import { Handle } from '@xyflow/react';


// const IVRNode = () => {
//   return (
//       <Card sx={{padding:'0.5rem'}}>
//        <Typography>IVR</Typography>
//        <Handle
//           type="source"
//           position="bottom"
//           id="handle-bottom"
//           style={{
//             background: 'red',
//             borderRadius: '50%',
//             left:'2px',
//             width: '2px',
//             height: '2px', // Adjust handle's position outside the node
//           }}
//         />
//        <Handle type='source' id='start' className="w-16 !bg-red-500 left-1 absolute " position={'left'} />
//        {/* <Handle type='source' position='left' className="w-16 !bg-red-500" /> */}
//       </Card>
//   );
// };

// export default IVRNode;
