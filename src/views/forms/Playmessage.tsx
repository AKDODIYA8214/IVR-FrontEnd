'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel } from '@mui/material';

const PlayMessage: React.FC = () => {
  // State to hold form values
  const [playAudioName, setPlayAudioName] = useState<string>('');
  const [playMessage, setPlayMessage] = useState<string>('none');
  const [selectedMessage, setSelectedMessage] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      playAudioName,
      playMessage,
      selectedMessage,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Play Message Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Play Audio Name */}
        <TextField
          id="play-audio-name"
          label="Play Audio Name"
          variant="outlined"
          fullWidth
          value={playAudioName}
          onChange={(e) => setPlayAudioName(e.target.value)}
          margin="normal"
          required
        />

        {/* Play Message */}
        <FormControl component="fieldset" style={{ marginTop: '20px' }}>
          <Typography>Play Message</Typography>
          <RadioGroup
            value={playMessage}
            onChange={(e) => setPlayMessage(e.target.value)}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>

          {playMessage === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel id="invalid-sound-label">Select Play Message</InputLabel>
              <Select
                labelId="select-message-label"
                id="select-message"
                value={selectedMessage}
                onChange={(e) => setSelectedMessage(e.target.value)}
                label="Select Play Message"
                displayEmpty
              >
                <MenuItem value="message1">Message 1</MenuItem>
                <MenuItem value="message2">Message 2</MenuItem>
                <MenuItem value="message3">Message 3</MenuItem>
              </Select>
            </FormControl>
          )}
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

export default PlayMessage;
