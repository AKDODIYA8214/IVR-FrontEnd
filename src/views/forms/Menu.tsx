'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Radio, RadioGroup, FormControlLabel, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';

const Menu: React.FC = () => {
  // State to hold form values
  const [ivrMenuName, setIvrMenuName] = useState<string>('');
  const [greetLongName, setGreetLongName] = useState<string>('none');
  const [timeout, setTimeout] = useState<string>('3000');
  const [maxAttempt, setMaxAttempt] = useState<string>('1');
  const [visitLimit, setVisitLimit] = useState<string>('0');
  const [invalidSound, setInvalidSound] = useState<string>('none');
  const [invalidSoundOption, setInvalidSoundOption] = useState<string>('');
  const [timeoutSound, setTimeoutSound] = useState<string>('none');
  const [timeoutSoundOption, setTimeoutSoundOption] = useState<string>('');
  const [inputLimitSound, setInputLimitSound] = useState<string>('none');
  const [inputLimitSoundOption, setInputLimitSoundOption] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ivrMenuName,
      greetLongName,
      timeout,
      maxAttempt,
      visitLimit,
      invalidSound,
      invalidSoundOption,
      timeoutSound,
      timeoutSoundOption,
      inputLimitSound,
      inputLimitSoundOption,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Menu Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="ivr-menu-name"
          label="IVR Menu Name"
          variant="outlined"
          fullWidth
          value={ivrMenuName}
          onChange={(e) => setIvrMenuName(e.target.value)}
          margin="normal"
          required
        />

        {/* Greet Long Name */}
        <FormControl component="fieldset" style={{ marginTop: '20px' }}>
          <Typography>Greet Long Name</Typography>
          <RadioGroup
            value={greetLongName}
            onChange={(e) => setGreetLongName(e.target.value)}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {greetLongName === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel id="greet-select-label">Select Greet Long Name</InputLabel>
              <Select
                labelId="greet-select-label"
                id="greet-select"
                value={invalidSoundOption}
                label="Select Greet Long Name"
                onChange={(e) => setInvalidSoundOption(e.target.value)}
              >
                <MenuItem value="greet1">Greet 1</MenuItem>
                <MenuItem value="greet2">Greet 2</MenuItem>
              </Select>
            </FormControl>
          )}
        </FormControl>

        {/* Timeout */}
        <TextField
          id="timeout"
          label="Timeout (MS)"
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

        {/* Visit Limit */}
        <TextField
          id="visit-limit"
          label="Visit Limit"
          variant="outlined"
          fullWidth
          value={visitLimit}
          onChange={(e) => setVisitLimit(e.target.value)}
          margin="normal"
          required
        />

        {/* Invalid Sound */}
        <FormControl component="fieldset" fullWidth style={{ marginTop: '20px' }}>
          <Typography>Invalid Sound</Typography>
          <RadioGroup
            value={invalidSound}
            onChange={(e) => setInvalidSound(e.target.value)}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {invalidSound === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel id="invalid-sound-label">Select Invalid Sound</InputLabel>
              <Select
                labelId="invalid-sound-label"
                id="invalid-sound"
                value={invalidSoundOption}
                label="Select Invalid Sound"
                onChange={(e) => setInvalidSoundOption(e.target.value)}
              >
                <MenuItem value="sound1">Sound 1</MenuItem>
                <MenuItem value="sound2">Sound 2</MenuItem>
              </Select>
            </FormControl>
          )}
        </FormControl>

        {/* Timeout Sound */}
        <FormControl component="fieldset" fullWidth style={{ marginTop: '20px' }}>
          <Typography>Timeout Sound</Typography>
          <RadioGroup
            value={timeoutSound}
            onChange={(e) => setTimeoutSound(e.target.value)}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {timeoutSound === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel id="timeout-sound-label">Select Timeout Sound</InputLabel>
              <Select
                labelId="timeout-sound-label"
                id="timeout-sound"
                value={timeoutSoundOption}
                label="Select Timeout Sound"
                onChange={(e) => setTimeoutSoundOption(e.target.value)}
              >
                <MenuItem value="sound1">Sound 1</MenuItem>
                <MenuItem value="sound2">Sound 2</MenuItem>
              </Select>
            </FormControl>
          )}
        </FormControl>

        {/* Input Limit Reached Sound */}
        <FormControl component="fieldset" fullWidth style={{ marginTop: '20px' }}>
          <Typography>Input Limit Reached Sound</Typography>
          <RadioGroup
            value={inputLimitSound}
            onChange={(e) => setInputLimitSound(e.target.value)}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {inputLimitSound === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }}>
              <InputLabel id="input-limit-sound-label">Select Input Limit Reached Sound</InputLabel>
              <Select
                labelId="input-limit-sound-label"
                id="input-limit-sound"
                value={inputLimitSoundOption}
                label="Select Input Limit Reached Sound"
                onChange={(e) => setInputLimitSoundOption(e.target.value)}
              >
                <MenuItem value="sound1">Sound 1</MenuItem>
                <MenuItem value="sound2">Sound 2</MenuItem>
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

export default Menu;
