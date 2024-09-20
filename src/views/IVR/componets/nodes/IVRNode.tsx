import React from 'react'; 
import { Box, Card, Typography, IconButton, Avatar } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
import { Handle } from '@xyflow/react';


const IVRNode = () => {
  return (
      <Card sx={{padding:'0.5rem'}}>
       <Avatar variant='square' sizes='' src='/images/ivr.svg'/>
       <Handle
          type="source"
          position="bottom"
          id="handle-bottom"
          style={{
            background: 'red',
            borderRadius: '50%',
            left:'2px',
            width: '2px',
            height: '2px', // Adjust handle's position outside the node
          }}
        />
       <Handle type='source' id='start' className="w-16 !bg-red-500 left-1 absolute " position={'left'} />
       {/* <Handle type='source' position='left' className="w-16 !bg-red-500" /> */}
      </Card>
  );
};

export default IVRNode;
