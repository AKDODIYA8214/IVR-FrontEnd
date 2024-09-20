'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Queue: React.FC = () => {
  // State to hold form values
  const [queueName, setQueueName] = useState<string>('');
  const [selectedQueue, setSelectedQueue] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      queueName,
      selectedQueue,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Queue Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Queue Name */}
        <TextField
          id="queue-name"
          label="Queue Name"
          variant="outlined"
          fullWidth
          value={queueName}
          onChange={(e) => setQueueName(e.target.value)}
          margin="normal"
          required
        />

        {/* Select Queue */}
        <FormControl fullWidth variant="outlined" margin="normal" required>
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

export default Queue;
