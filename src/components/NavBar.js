import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import '../App.css';
import logo from '../images/Logo_BrasilGestion-03.png';

export function NavBar() {
  return (
  <div className="App">
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <img src={logo} width="500" height="193" alt="Logo_BrasilGestion_03" />
          <Button color="inherit"  href="/" sx={{typography: 'h6'}}>Iniciação</Button>
          <Button color="inherit" href="/Instituições" sx={{typography: 'h6'}}>Instituições</Button>
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