// src/App.tsx

import React, { useState } from 'react';
import { add } from './utils/stringCalculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError('');
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && (
        <h2>Result: {result}</h2>
      )}
      {error && (
        <h2 style={{ color: 'red' }}>Error: {error}</h2>
      )}
    </div>
  );
}

export default App;
