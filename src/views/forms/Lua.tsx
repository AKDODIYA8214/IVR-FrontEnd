'use client';

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from '@mui/material';

const Lua: React.FC = () => {
  // State to hold form values
  const [name, setName] = useState<string>('');
  const [selectedLuaFile, setSelectedLuaFile] = useState<string>('');
  const [referenceOf, setReferenceOf] = useState<string>('');
  const [referenceType, setReferenceType] = useState<string>('');
  const [referenceKey, setReferenceKey] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      selectedLuaFile,
      referenceOf,
      referenceType,
      referenceKey,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Lua Configuration
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <TextField
          id="lua-name"
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />

        {/* Select Lua File */}
        <Box style={{ marginTop: '20px' }}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="select-lua-file-label">Select Lua File</InputLabel>
            <Select
              labelId="select-lua-file-label"
              id="select-lua-file"
              value={selectedLuaFile}
              onChange={(e) => setSelectedLuaFile(e.target.value)}
              label="Select Lua File"
            >
              <MenuItem value="file1">Lua File 1</MenuItem>
              <MenuItem value="file2">Lua File 2</MenuItem>
              <MenuItem value="file3">Lua File 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Reference Of */}
        <Box style={{ marginTop: '20px' }}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="reference-of-label">Reference Of</InputLabel>
            <Select
              labelId="reference-of-label"
              id="reference-of"
              value={referenceOf}
              onChange={(e) => setReferenceOf(e.target.value)}
              label="Reference Of"
            >
              <MenuItem value="ref1">Reference 1</MenuItem>
              <MenuItem value="ref2">Reference 2</MenuItem>
              <MenuItem value="ref3">Reference 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Reference Type */}
        <Box style={{ marginTop: '20px' }}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="reference-type-label">Reference Type</InputLabel>
            <Select
              labelId="reference-type-label"
              id="reference-type"
              value={referenceType}
              onChange={(e) => setReferenceType(e.target.value)}
              label="Reference Type"
            >
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
              <MenuItem value="type3">Type 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Reference Key */}
        <TextField
          id="reference-key"
          label="Reference Key"
          variant="outlined"
          fullWidth
          value={referenceKey}
          onChange={(e) => setReferenceKey(e.target.value)}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Lua;
