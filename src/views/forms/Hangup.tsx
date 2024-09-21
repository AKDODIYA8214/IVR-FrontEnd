'use client';

import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useIVRContext } from '../IVRContext';
interface Props {
  setData: Function,
  nodeid: string
}
export const Hangup = ({ setData, nodeid }) => {
  // State to hold the name input
  const [name, setName] = useState<string>('');
  // State to hold the selected hangup cause
  const [hangupCause, setHangupCause] = useState<string>('');
  const { jsonData } = useIVRContext();
  // Handler for form submission
  useEffect(() => {
    console.log(jsonData);
  }, [jsonData]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hangup = {

      type: "hangup",
      properties: {
        ivrPropertyName: name,
        hangup_cause: hangupCause,
      },
      defaultExitNode: "call_hangup"
    };
    setData(hangup);
    console.log('Submitted:', { name, hangupCause });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Hangup Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          placeholder="Enter your name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />

        <FormControl fullWidth style={{ marginTop: '20px' }}>
          <InputLabel id="hangup-cause-label">Select Hangup Cause</InputLabel>
          <Select
            labelId="hangup-cause-label"
            id="hangup-cause"
            value={hangupCause}
            label="Select Hangup Cause"
            onChange={(e) => setHangupCause(e.target.value as string)}
            required
          >
            <MenuItem value="Network Issue">Network Issue</MenuItem>
            <MenuItem value="User Ended">User Ended</MenuItem>
            <MenuItem value="Dropped Call">Dropped Call</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
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

export default Hangup;
