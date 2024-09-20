import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';

export const CallbackNode = () => {
  return (
    <>
      <Handle id='target' type="target" position={Position.Left} className='!bg-yellow-500' />
      <Handle id='start' type="source" position={Position.Right} style={{
            background: 'green',  
            borderRadius: '50%',
            position: 'absolute',
            top: '30%',           // Custom right position (a little outside the node)
          }} />
      <Handle id='error' type="target" position={Position.Right} className='!bg-red-500' style={{ 
            borderRadius: '50%',
            position: 'absolute',
            top: '70%',           // Custom right position (a little outside the node)
          }}/>
      <Card className='p-4 border border-blue-400'>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#00007D" d="M26.4 33.9s4-2.6 4.8-3s1.7-.6 2.2-.2c.8.5 7.5 4.9 8.1 5.3s.8 1.5.1 2.6c-.8 1.1-4.3 5.5-5.8 5.4c-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1s4.8 7.3 5.3 8.1c.3.5.2 1.4-.2 2.2s-3 4.8-3 4.8s.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5"/><g fill="#00007D"><path d="M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6"/><path d="m28 16l-6.7-5L28 6z"/></g></svg>
       </Card>
    </>
  )
}