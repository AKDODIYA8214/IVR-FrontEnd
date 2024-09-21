'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

interface Props{
  setData:Function,
  nodeid:string
}
const Ivr = ({setData,nodeid}:Props) => {
  // State to hold form values
  const [ivrName, setIvrName] = useState<string>('');
  const [selectedIvr, setSelectedIvr] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ivr={
      type:"ivr",
      properties:{
         ivrPropertyName:ivrName,
         ivr_uuid:selectedIvr
      },
      defaultExitNode:"call_hangup"
    };
    console.log({
      ivrName,
      selectedIvr,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        IVR Configuration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* IVR Name */}
        <TextField
          id="ivr-name"
          label="IVR Name"
          variant="outlined"
          fullWidth
          value={ivrName}
          onChange={(e) => setIvrName(e.target.value)}
          margin="normal"
          required
        />

        {/* Select IVR List */}
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="select-ivr-label">Select IVR List</InputLabel>
          <Select
            labelId="select-ivr-label"
            id="select-ivr"
            value={selectedIvr}
            onChange={(e) => setSelectedIvr(e.target.value)}
            label="Select IVR List"
          >
            <MenuItem value="ivr1">IVR 1</MenuItem>
            <MenuItem value="ivr2">IVR 2</MenuItem>
            <MenuItem value="ivr3">IVR 3</MenuItem>
          </Select>
        </FormControl>

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

export default Ivr;
