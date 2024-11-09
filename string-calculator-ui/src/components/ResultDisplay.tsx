// src/components/ResultDisplay.tsx

import React from 'react';
import { Alert } from '@mui/material';

interface ResultDisplayProps {
  result: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => (
  <Alert severity="success" style={{ marginTop: '1rem' }}>
    Result: {result}
  </Alert>
);

export default ResultDisplay;