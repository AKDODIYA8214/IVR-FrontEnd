'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Time: React.FC = () => {
  // State to hold the name input
  const [name, setName] = useState<string>('');

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted name:', name);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Time Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          placeholder='Enter Name'
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default Time;
