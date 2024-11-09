import React from 'react';
import { Container, Typography } from '@mui/material';
import Calculator from './components/Calculator';

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        String Calculator
      </Typography>
      <Calculator />
    </Container>
  );
}

export default App;