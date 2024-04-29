import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import '../App.css';


export function PieBar() {
  return (
  <div className="App">
    <Box sx={{ alignItems: 'center'}}>
      <AppBar  color="primary" position="static">
        <Toolbar >
          <Button color="inherit" href="/Instituições" sx={{typography: 'h6', pl:40}}>Instituições</Button>
          <Button color="inherit" href="/Inovações" sx={{typography: 'h6'}}>Inovações</Button>
          <Button color="inherit" href="/Países" sx={{typography: 'h6'}}>Países</Button>
          <Button color="inherit" href="/Especialistas" sx={{typography: 'h6'}}>Especialistas</Button>
          <Button color="inherit" href="/Contato" sx={{typography: 'h6'}}>Contato</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </div>
  );
}