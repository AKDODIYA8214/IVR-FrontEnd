import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';

export const LangNode = () => {
  return (
    <>
      <Handle id='target' type="target" position={Position.Left} className='!bg-yellow-500' />
      <Handle id='start-menu' type="source" position={Position.Right} style={{
        background: 'green',
        borderRadius: '50%',
        position: 'absolute',
        top: '30%',           // Custom right position (a little outside the node)
      }} />
      <Handle id='error' type="target" position={Position.Right} className='!bg-red-500' style={{
        borderRadius: '50%',
        position: 'absolute',
        top: '70%',           // Custom right position (a little outside the node)
      }} />
      <Handle id="invalid" type="source" position={Position.Bottom} style={{
        background: 'blue',
        borderRadius: '50%',
        position: 'absolute',
        left: '30%',           // Custom right position (a little outside the node)
      }} />
      <Handle id='timeout' type="source" position={Position.Bottom} className='!bg-pink-500' style={{
        background: 'pink',
        borderRadius: '50%',
        position: 'absolute',
        left: '70%',           // Custom right position (a little outside the node)
      }} />
      <Card className='p-4 border border-blue-400'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#00007D" d="M21.056 12h-2a1 1 0 0 0 0 2v2H17.87a3 3 0 0 0 .185-1a3 3 0 0 0-5.598-1.5a1 1 0 1 0 1.732 1a1 1 0 0 1 .866-.5a1 1 0 0 1 0 2a1 1 0 0 0 0 2a1 1 0 1 1 0 2a1 1 0 0 1-.866-.5a1 1 0 1 0-1.732 1a3 3 0 0 0 5.598-1.5a3 3 0 0 0-.185-1h1.185v3a1 1 0 0 0 2 0v-7a1 1 0 1 0 0-2m-11.97-.757a1 1 0 1 0 1.94-.486l-1.757-7.03a2.28 2.28 0 0 0-4.425 0l-1.758 7.03a1 1 0 1 0 1.94.486L5.585 9h2.94ZM6.086 7l.697-2.787a.292.292 0 0 1 .546 0L8.026 7Zm7.97 0h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2" /></svg>
      </Card>
    </>
  )
}
