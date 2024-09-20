import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Avatar, Card, Icon, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import type { SVGProps } from 'react';
function MaterialSymbolsLightTextToSpeech(props: SVGProps<SVGSVGElement>) {
	return (<SvgIcon><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" {...props}><path fill="#00007D" d="M4.616 21q-.672 0-1.144-.472T3 19.385V4.615q0-.67.472-1.143Q3.944 3 4.616 3h6.707l-1 1H4.615q-.269 0-.442.173T4 4.616v14.769q0 .269.173.442t.443.173h9.769q.269 0 .442-.173t.173-.443V17.5h1v1.885q0 .67-.472 1.143q-.472.472-1.143.472zM6.5 17.5v-1h6v1zm0-2.77v-1h4v1zm8-.75l-3.288-3.288H8.5v-4h2.712L14.5 3.404zm2-2.357V5.762q.766.505 1.133 1.319T18 8.692t-.377 1.612q-.377.813-1.123 1.319m0 3.935v-1.062q1.539-.74 2.52-2.336q.98-1.594.98-3.468t-.98-3.468t-2.52-2.335V1.827q1.946.771 3.223 2.668T21 8.692t-1.277 4.197t-3.223 2.669"></path></svg></SvgIcon>);
}
const TtsNode = () => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom}/>
      <Card className='p-4 border border-blue-400'>
      <MaterialSymbolsLightTextToSpeech/>
       </Card>
    </>
  )
}
export {MaterialSymbolsLightTextToSpeech,TtsNode}





