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

const Callback: React.FC = () => {
  // State to hold form values
  const [callbackName, setCallbackName] = useState<string>('');
  const [selectedQueue, setSelectedQueue] = useState<string>('');
  const [time, setTime] = useState<number | ''>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      callbackName,
      selectedQueue,
      time,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Callback Configuration
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Callback Name */}
        <TextField
          id="callback-name"
          label="Callback Name"
          variant="outlined"
          fullWidth
          value={callbackName}
          onChange={(e) => setCallbackName(e.target.value)}
          margin="normal"
          required
        />

        {/* Select Queue */}
        <Box style={{ marginTop: '20px' }}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="select-queue-label">Select Queue</InputLabel>
            <Select
              labelId="select-queue-label"
              id="select-queue"
              value={selectedQueue}
              onChange={(e) => setSelectedQueue(e.target.value)}
              label="Select Queue"
            >
              <MenuItem value="queue1">Queue 1</MenuItem>
              <MenuItem value="queue2">Queue 2</MenuItem>
              <MenuItem value="queue3">Queue 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Time (minutes) */}
        <TextField
          id="callback-time"
          label="Time (minutes)"
          variant="outlined"
          fullWidth
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value === '' ? '' : Number(e.target.value))}
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

export default Callback;
