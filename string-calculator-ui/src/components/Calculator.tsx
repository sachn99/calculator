// src/components/Calculator.tsx

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { add } from '../utils/stringCalculator';
import ResultDisplay from './ResultDisplay';
import ErrorDisplay from './ErrorDisplay';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

const handleCalculate = () => {
  try {
    console.log(`Raw input from UI: ${JSON.stringify(input)}`);
    const normalizedInput = input.trim().replace(/\r\n|\r/g, '\n').replace(/\\n/g, '\n');
    console.log(`Normalized input: ${JSON.stringify(normalizedInput)}`);
    const result = add(normalizedInput);
    setResult(result);
    setError('');
  } catch (err: any) {
    console.error(err);
    setError('An error occurred: Invalid input. Please try again.');
    setResult(null);
  }
};



  return (
    <Box>
      <TextField
        label="Enter Numbers"
        placeholder="//[***]\n1***2***3"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCalculate} fullWidth>
        Calculate
      </Button>
      {result !== null && <ResultDisplay result={result} />}
      {error && <ErrorDisplay error={error} />}
    </Box>
  );
};

export default Calculator;