// src/components/ErrorDisplay.tsx

import React from 'react';
import { Alert } from '@mui/material';

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <Alert severity="error" style={{ marginTop: '1rem' }}>
    Error: {error}
  </Alert>
);

export default ErrorDisplay;