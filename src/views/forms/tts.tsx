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

const Tts: React.FC = () => {
  // State to hold form values
  const [ttsName, setTtsName] = useState<string>('');
  const [preTtsFile, setPreTtsFile] = useState<string>('none');
  const [selectedPreFile, setSelectedPreFile] = useState<string>('');
  const [postTtsFile, setPostTtsFile] = useState<string>('none');
  const [selectedPostFile, setSelectedPostFile] = useState<string>('');
  const [ttsType, setTtsType] = useState<string>('');
  const [ttsKey, setTtsKey] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ttsName,
      preTtsFile,
      selectedPreFile,
      postTtsFile,
      selectedPostFile,
      ttsType,
      ttsKey,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        TTS Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* TTS Name */}
        <TextField
          id="tts-name"
          label="TTS Name"
          variant="outlined"
          fullWidth
          value={ttsName}
          onChange={(e) => setTtsName(e.target.value)}
          margin="normal"
          required
        />

        {/* Pre TTS File */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Pre TTS File</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={preTtsFile}
              onChange={(e) => setPreTtsFile(e.target.value)}
            >
              <FormControlLabel value="none" control={<Radio />} label="None" />
              <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
            </RadioGroup>

            {preTtsFile === 'chooseExisting' && (
              <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
                <InputLabel id="select-pre-tts-file-label">Select Pre TTS File</InputLabel>
                <Select
                  labelId="select-pre-tts-file-label"
                  id="select-pre-tts-file"
                  value={selectedPreFile}
                  onChange={(e) => setSelectedPreFile(e.target.value)}
                  label="Select Pre TTS File"
                >
                  <MenuItem value="file1">File 1</MenuItem>
                  <MenuItem value="file2">File 2</MenuItem>
                  <MenuItem value="file3">File 3</MenuItem>
                </Select>
              </FormControl>
            )}
          </FormControl>
        </Box>

        {/* TTS Type */}
        <Box style={{ marginTop: '20px' }}>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="tts-type-label">TTS Type</InputLabel>
            <Select
              labelId="tts-type-label"
              id="tts-type"
              value={ttsType}
              onChange={(e) => setTtsType(e.target.value)}
              label="TTS Type"
            >
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
              <MenuItem value="type3">Type 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* TTS Key */}
        <TextField
          id="tts-key"
          label="TTS Key"
          variant="outlined"
          fullWidth
          value={ttsKey}
          onChange={(e) => setTtsKey(e.target.value)}
          margin="normal"
          required
        />

        {/* Post TTS File */}
        <Box style={{ marginTop: '20px' }}>
          <Typography>Post TTS File</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={postTtsFile}
              onChange={(e) => setPostTtsFile(e.target.value)}
            >
              <FormControlLabel value="none" control={<Radio />} label="None" />
              <FormControlLabel value="chooseExisting" control={<Radio />} label="Choose Existing" />
            </RadioGroup>

            {postTtsFile === 'chooseExisting' && (
              <FormControl fullWidth style={{ marginTop: '10px' }} variant="outlined" required>
                <InputLabel id="select-post-tts-file-label">Select Post TTS File</InputLabel>
                <Select
                  labelId="select-post-tts-file-label"
                  id="select-post-tts-file"
                  value={selectedPostFile}
                  onChange={(e) => setSelectedPostFile(e.target.value)}
                  label="Select Post TTS File"
                >
                  <MenuItem value="file1">File 1</MenuItem>
                  <MenuItem value="file2">File 2</MenuItem>
                  <MenuItem value="file3">File 3</MenuItem>
                </Select>
              </FormControl>
            )}
          </FormControl>
        </Box>
            
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

export default Tts;
