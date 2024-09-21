'use client';

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from '@mui/material';

interface Props{
  setData:Function,
  nodeid:string
}

const Language = ({setData,nodeid}:Props) => {
  // State to hold form values
  const [languageMenuName, setLanguageMenuName] = useState<string>('');
  const [greetFile, setGreetFile] = useState<string>('none');
  const [selectedGreetFile, setSelectedGreetFile] = useState<string>('');
  const [timeoutMS, setTimeoutMS] = useState<number | ''>('');
  const [maxAttempt, setMaxAttempt] = useState<number | ''>('');
  const [invalidSound, setInvalidSound] = useState<string>('none');
  const [selectedInvalidSound, setSelectedInvalidSound] = useState<string>('');
  const [timeoutSound, setTimeoutSound] = useState<string>('none');
  const [selectedTimeoutSound, setSelectedTimeoutSound] = useState<string>('');
  const [inputLimitReachedSound, setInputLimitReachedSound] = useState<string>('none');
  const [selectedInputLimitSound, setSelectedInputLimitReachedSound] = useState<string>('');

  // State to hold selected languages
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(Array(10).fill(''));

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    const language={
      type:"langMenu",
      properties:{
         "assignedDigits":{
         },
         "ivrPropertyName":"typeLang",
         "nextNode":"",
         "fileToPlay":"cust_input.wav",
         "timeout":"3000",
         "maxTries":"4",
         "invalidInputFileToPlay":"kvwelcome.wav",
         "inputWaitTimeoutFileToPlay":"gn_GN.wav",
         "noInputLimitReachedFileToPlay":"Closing_Call.wav"
      }
    };
    e.preventDefault();
    console.log({
      languageMenuName,
      greetFile,
      selectedGreetFile,
      timeoutMS,
      maxAttempt,
      invalidSound,
      selectedInvalidSound,
      timeoutSound,
      selectedTimeoutSound,
      inputLimitReachedSound,
      selectedInputLimitSound,
      selectedLanguages,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Language Configuration
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Language Menu Name */}
        <TextField
          id="language-menu-name"
          label="Language Menu Name"
          variant="outlined"
          fullWidth
          value={languageMenuName}
          onChange={(e) => setLanguageMenuName(e.target.value)}
          margin="normal"
          required
        />

        {/* Greet File */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Greet File</Typography>
          <RadioGroup
            value={greetFile}
            onChange={(e) => {
              setGreetFile(e.target.value);
              if (e.target.value === 'none') setSelectedGreetFile('');
            }}
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
        </Box>

        {/* Timeout (MS) */}
        <TextField
          id="timeout-ms"
          label="Timeout (MS)"
          type="number"
          variant="outlined"
          fullWidth
          value={timeoutMS}
          onChange={(e) => setTimeoutMS(Number(e.target.value))}
          margin="normal"
          required
        />

        {/* Max Attempt */}
        <TextField
          id="max-attempt"
          label="Max Attempt"
          type="number"
          variant="outlined"
          fullWidth
          value={maxAttempt}
          onChange={(e) => setMaxAttempt(Number(e.target.value))}
          margin="normal"
          required
        />

        {/* Invalid Sound */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Invalid Sound</Typography>
          <RadioGroup
            value={invalidSound}
            onChange={(e) => {
              setInvalidSound(e.target.value);
              if (e.target.value === 'none') setSelectedInvalidSound('');
            }}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {invalidSound === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
              <InputLabel id="select-invalid-sound-label">Select Invalid Sound</InputLabel>
              <Select
                labelId="select-invalid-sound-label"
                id="select-invalid-sound"
                value={selectedInvalidSound}
                onChange={(e) => setSelectedInvalidSound(e.target.value)}
                label="Select Invalid Sound"
              >
                <MenuItem value="sound1">Invalid Sound 1</MenuItem>
                <MenuItem value="sound2">Invalid Sound 2</MenuItem>
                <MenuItem value="sound3">Invalid Sound 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>

        {/* Timeout Sound */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Timeout Sound</Typography>
          <RadioGroup
            value={timeoutSound}
            onChange={(e) => {
              setTimeoutSound(e.target.value);
              if (e.target.value === 'none') setSelectedTimeoutSound('');
            }}
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
        </Box>

        {/* Input Limit Reached Sound */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Input Limit Reached Sound</Typography>
          <RadioGroup
            value={inputLimitReachedSound}
            onChange={(e) => {
              setInputLimitReachedSound(e.target.value);
              if (e.target.value === 'none') setSelectedInputLimitReachedSound('');
            }}
          >
            <FormControlLabel value="none" control={<Radio />} label="None" />
            <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
          </RadioGroup>
          {inputLimitReachedSound === 'chooseExisting' && (
            <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
              <InputLabel id="select-input-limit-sound-label">Select Input Limit Reached Sound</InputLabel>
              <Select
                labelId="select-input-limit-sound-label"
                id="select-input-limit-sound"
                value={selectedInputLimitSound}
                onChange={(e) => setSelectedInputLimitSound(e.target.value)}
                label="Select Input Limit Reached Sound"
              >
                <MenuItem value="sound1">Input Limit Sound 1</MenuItem>
                <MenuItem value="sound2">Input Limit Sound 2</MenuItem>
                <MenuItem value="sound3">Input Limit Sound 3</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>

        {/* Language Selection - Individual 10 Options */}
        <Typography style={{ marginTop: '20px' }}>Select Languages</Typography>
        {Array.from({ length: 10 }).map((_, index) => (
          <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" key={index}>
            <InputLabel id={`select-language-label-${index}`}>Language {index + 1}</InputLabel>
            <Select
              labelId={`select-language-label-${index}`}
              id={`select-language-${index}`}
              value={selectedLanguages[index]}
              onChange={(e) => {
                const newLanguages = [...selectedLanguages];
                newLanguages[index] = e.target.value;
                setSelectedLanguages(newLanguages);
              }}
              label={`Language ${index + 1}`}
            >
              <MenuItem value="lang1">Language 1</MenuItem>
              <MenuItem value="lang2">Language 2</MenuItem>
              <MenuItem value="lang3">Language 3</MenuItem>
              <MenuItem value="lang4">Language 4</MenuItem>
              <MenuItem value="lang5">Language 5</MenuItem>
              <MenuItem value="lang6">Language 6</MenuItem>
              <MenuItem value="lang7">Language 7</MenuItem>
              <MenuItem value="lang8">Language 8</MenuItem>
              <MenuItem value="lang9">Language 9</MenuItem>
              <MenuItem value="lang10">Language 10</MenuItem>
            </Select>
          </FormControl>
        ))}

        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Language;
