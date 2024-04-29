import * as React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import '../App.css';

import { NavBar } from './NavBar';
import { Pie } from './Pie';
import { Box } from '@material-ui/core';


export default function PaísItem({paísItem}) {
  const id = useParams().id
  const note = paísItem.find(n => n.id === Number(id))
  return (
    <Box>
      <NavBar />
      <Box margin={4}>  
        <h2>{note.nombre}</h2>
        <Box>{note.img}</Box>
        <Box><strong>{note.titulo ? note.titulo : ''}</strong></Box>
        <Typography>{note.nombre}</Typography>
        <Typography>{note.contenido}</Typography>
        <Typography>{note.web}</Typography>
      </Box>
      <Pie />
    </Box>
  );
}