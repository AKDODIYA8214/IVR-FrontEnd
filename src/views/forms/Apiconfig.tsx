'use client';

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const ApiConfig: React.FC = () => {
  // State to hold form values
  const [configurationName, setConfigurationName] = useState<string>('');
  const [apiType, setApiType] = useState<string>('');
  const [api, setApi] = useState<string>('');

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      configurationName,
      apiType,
      api,
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        API Configuration Properties
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Configuration Name */}
        <TextField
          id="configuration-name"
          label="Enter Configuration Name"
          variant="outlined"
          fullWidth
          value={configurationName}
          onChange={(e) => setConfigurationName(e.target.value)}
          margin="normal"
          required
        />

        {/* API Type */}
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="api-type-label">Type</InputLabel>
          <Select
            labelId="api-type-label"
            id="api-type"
            value={apiType}
            onChange={(e) => setApiType(e.target.value)}
            label="Type"
          >
            <MenuItem value="rest">REST</MenuItem>
            <MenuItem value="graphql">GraphQL</MenuItem>
            <MenuItem value="soap">SOAP</MenuItem>
          </Select>
        </FormControl>

        {/* API Selection */}
        <FormControl fullWidth variant="outlined" margin="normal" required>
          <InputLabel id="api-label">API</InputLabel>
          <Select
            labelId="api-label"
            id="api"
            value={api}
            onChange={(e) => setApi(e.target.value)}
            label="API"
          >
            <MenuItem value="api1">API 1</MenuItem>
            <MenuItem value="api2">API 2</MenuItem>
            <MenuItem value="api3">API 3</MenuItem>
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

export default ApiConfig;
