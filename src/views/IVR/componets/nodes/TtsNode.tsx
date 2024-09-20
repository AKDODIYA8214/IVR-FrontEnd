import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';

export const TtsNode = () => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/>
      <Card className='p-4 border border-blue-400'>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#00007D" d="M4 22q-.825 0-1.412-.587T2 20V4q0-.825.588-1.412T4 2h6q.425 0 .713.288T11 3t-.288.713T10 4H4v16h11v-1q0-.425.288-.712T16 18t.713.288T17 19v1q0 .825-.587 1.413T15 22zm3-4q-.425 0-.712-.288T6 17t.288-.712T7 16h5q.425 0 .713.288T13 17t-.288.713T12 18zm0-3q-.425 0-.712-.288T6 14t.288-.712T7 13h3q.425 0 .713.288T11 14t-.288.713T10 15zm2.5-4q-.625 0-1.062-.437T8 9.5v-2q0-.625.438-1.062T9.5 6H11l2.3-2.3q.125-.125.313-.213T14 3.4q.425 0 .713.3t.287.725v8.15q0 .425-.288.725t-.712.3q-.2 0-.387-.087T13.3 13.3L11 11zM19 8.5q0 .825-.325 1.575T17.75 11.4q-.2.2-.475.075t-.275-.45v-5.05q0-.3.275-.437t.475.062q.6.575.925 1.325T19 8.5m2 0q0-1.65-.837-3.05t-2.288-2.2q-.375-.2-.525-.587t0-.763q.15-.4.538-.562t.737.037q2.025 1.05 3.2 2.95T23 8.5t-1.175 4.175t-3.2 2.95q-.35.2-.737.038t-.538-.563q-.15-.375 0-.762t.525-.588q1.45-.8 2.288-2.2T21 8.5"/></svg>
       </Card>
    </>
  )
}






