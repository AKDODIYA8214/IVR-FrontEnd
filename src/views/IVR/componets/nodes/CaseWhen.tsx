import { useState, useCallback, useEffect, useRef } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import { Box, Card, IconButton } from '@mui/material';
import { TbBinaryTree2 } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

export default function CaseWhen({ id }) {
  const [showToolbox, setShowToolbox] = useState(true);
  const { setNodes } = useReactFlow();
  const toolboxRef = useRef(null); // Ref to the toolbox

  // Handle node deletion
 
  const handleDelete = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
  }, [id, setNodes]);

  // Toggle toolbox visibility on click
  const toggleToolbox = () => {
    setShowToolbox((prev) => !prev);
  };

  // Hide toolbox when clicking outside
  const handleClickOutside = (event) => {
    if (toolboxRef.current && !toolboxRef.current.contains(event.target)) {
      setShowToolbox(false);
    }
  };

  // Add event listener to detect clicks outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
        {showToolbox && (
          <Box
            className="absolute"
            ref={toolboxRef} // Attach ref to the toolbox
            style={{
              position: 'absolute',
              top: -40, // Adjust this value for desired position
              backgroundColor: 'white', // Toolbox background color
              border: '1px solid #ccc',
              padding: '0.5px',
              borderRadius: '4px',
            }}
          >
            <IconButton onClick={handleDelete}>
              <MdDelete size={8} color='black' />
            </IconButton>
          </Box>
        )}
      <Card
        
        onClick={toggleToolbox} // Show toolbox on card click
      >
        <Box className="p-4 border border-blue-400 relative" >
        {/* Toolbox for delete action */}
        <Handle id='target' type="target" position={Position.Left} className='!bg-yellow-500' />
        <Handle
          id="start"
          type="source"
          position={Position.Right}
          style={{
              background: 'green',
              borderRadius: '50%',
              position: 'absolute',
            top: '35%',
          }}
          />
        <Handle
          id="error"
          type="source"
          position={Position.Right}
          style={{
              background: 'red',
              borderRadius: '50%',
              position: 'absolute',
              top: '65%',
            }}
            className="!bg-red-500"
            />

        {/* Icon inside the node */}
        <TbBinaryTree2 size={30} />
            </Box>
      </Card>
    </div>
  );
}
