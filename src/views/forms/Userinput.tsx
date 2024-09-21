'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, Checkbox, FormControlLabel as MuiFormControlLabel, Box } from '@mui/material';

const UserInput: React.FC = () => {
  const [userInputName, setUserInputName] = useState<string>('');
  const [greetFile, setGreetFile] = useState<string>('none');
  const [selectedGreetFile, setSelectedGreetFile] = useState<string>('');
  const [timeout, setTimeout] = useState<string>('');
  const [maxAttempt, setMaxAttempt] = useState<string>('');
  const [timeoutSound, setTimeoutSound] = useState<string>('none');
  const [selectedTimeoutSound, setSelectedTimeoutSound] = useState<string>('');
  const [inputLimitReachedSound, setInputLimitReachedSound] = useState<string>('none');
  const [selectedInputLimitReachedSound, setSelectedInputLimitReachedSound] = useState<string>('');
  const [userInputKey, setUserInputKey] = useState<string>('');
  const [minInputLength, setMinInputLength] = useState<string>('');
  const [maxInputLength, setMaxInputLength] = useState<string>('');
  const [terminatorKey, setTerminatorKey] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userInputName,
      greetFile,
      selectedGreetFile,
      timeout,
      maxAttempt,
      timeoutSound,
      selectedTimeoutSound,
      inputLimitReachedSound,
      selectedInputLimitReachedSound,
      userInputKey,
      minInputLength,
      maxInputLength,
      terminatorKey,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        User Input Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* User Input Name */}
        <TextField
          id="user-input-name"
          label="User Input Name"
          variant="outlined"
          fullWidth
          value={userInputName}
          onChange={(e) => setUserInputName(e.target.value)}
          margin="normal"
          required
        />

        {/* Greet File */}
        <Box style={{ marginTop: '20px' }}>
  <Typography>Greet File</Typography>
  <FormControl component="fieldset" fullWidth>
    <RadioGroup
      value={greetFile}
      onChange={(e) => setGreetFile(e.target.value)}
    >
      <FormControlLabel value="none" control={<Radio />} label="None" />
      <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
    </RadioGroup>

    {greetFile === 'chooseExisting' && (
      <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
        <InputLabel id="select-greet-file-label">Select Greet File</InputLabel>
        <Select
          labelId="select-greet-file-label"
          id="select-greet-file"
          value={selectedGreetFile}
          onChange={(e) => setSelectedGreetFile(e.target.value)}
          label="Select Greet File"
        >
          <MenuItem value="sound1">Greet File 1</MenuItem>
          <MenuItem value="sound2">Greet File 2</MenuItem>
          <MenuItem value="sound3">Greet File 3</MenuItem>
        </Select>
      </FormControl>
    )}
  </FormControl>
</Box>


        {/* Timeout (ms) */}
        <TextField
          id="timeout"
          label="Timeout (ms)"
          variant="outlined"
          fullWidth
          value={timeout}
          onChange={(e) => setTimeout(e.target.value)}
          margin="normal"
          required
        />

        {/* Max Attempt */}
        <TextField
          id="max-attempt"
          label="Max Attempt"
          variant="outlined"
          fullWidth
          value={maxAttempt}
          onChange={(e) => setMaxAttempt(e.target.value)}
          margin="normal"
          required
        />

        {/* Timeout Sound */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Timeout Sound</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={timeoutSound}
              onChange={(e) => setTimeoutSound(e.target.value)}
            >
              <FormControlLabel value="none" control={<Radio />} label="None" />
              <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
            </RadioGroup>

            {timeoutSound === 'chooseExisting' && (
              <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
                <InputLabel id="select-timeout-sound-label">Select Timeout Sound</InputLabel>
                <Select
                  labelId="select-timeout-sound-label"
                  id="select-timeout-sound"
                  value={selectedTimeoutSound}
                  onChange={(e) => setSelectedTimeoutSound(e.target.value)}
                  label="Select Timeout Sound"
                >
                  <MenuItem value="sound1">Timeout Sound 1</MenuItem>
                  <MenuItem value="sound2">Timeout Sound 2</MenuItem>
                  <MenuItem value="sound3">Timeout Sound 3</MenuItem>
                </Select>
              </FormControl>
            )}
          </FormControl>
        </Box>

        {/* Input Limit Reached Sound */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Input Limit Reached Sound</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={inputLimitReachedSound}
              onChange={(e) => setInputLimitReachedSound(e.target.value)}
            >
              <FormControlLabel value="none" control={<Radio />} label="None" />
              <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
            </RadioGroup>

            {inputLimitReachedSound === 'chooseExisting' && (
              <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
                <InputLabel id="select-input-limit-reached-sound-label">Select Input Limit Reached Sound</InputLabel>
                <Select
                  labelId="select-input-limit-reached-sound-label"
                  id="select-input-limit-reached-sound"
                  value={selectedInputLimitReachedSound}
                  onChange={(e) => setSelectedInputLimitReachedSound(e.target.value)}
                  label="Select Input Limit Reached Sound"
                >
                  <MenuItem value="sound1">Input Limit Sound 1</MenuItem>
                  <MenuItem value="sound2">Input Limit Sound 2</MenuItem>
                  <MenuItem value="sound3">Input Limit Sound 3</MenuItem>
                </Select>
              </FormControl>
            )}
          </FormControl>
        </Box>

        {/* User Input Key */}
        <TextField
          id="user-input-key"
          label="User Input Key"
          variant="outlined"
          fullWidth
          value={userInputKey}
          onChange={(e) => setUserInputKey(e.target.value)}
          margin="normal"
          required
        />

        {/* Min Input Length */}
        <TextField
          id="min-input-length"
          label="Min Input Length"
          variant="outlined"
          fullWidth
          value={minInputLength}
          onChange={(e) => setMinInputLength(e.target.value)}
          margin="normal"
          required
        />

        {/* Max Input Length */}
        <TextField
          id="max-input-length"
          label="Max Input Length"
          variant="outlined"
          fullWidth
          value={maxInputLength}
          onChange={(e) => setMaxInputLength(e.target.value)}
          margin="normal"
          required
        />

        {/* Terminator Key */}
        <MuiFormControlLabel
          control={
            <Checkbox
              checked={terminatorKey}
              onChange={(e) => setTerminatorKey(e.target.checked)}
              name="terminator-key"
            />
          }
          label="Terminator Key"
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

export default UserInput;
