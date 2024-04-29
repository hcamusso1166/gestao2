import * as React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';
import { Pie } from './Pie';
import '../App.css';

import { NavBar } from './NavBar';


export default function Instituiçõe({instituições}) {
  const id = useParams().id
  const note = instituições.find(n => n.id === Number(id))
  return (
    <Box>
      <NavBar />
      <Box
        align={'center'}
        margin={4}
      >
        <img
          srcSet={`${note.img2}?w=150&h=76&fit=crop&auto=format&dpr=2 2x`}
          src={`${note.img2}?w=150&h=76&fit=crop&auto=format`}
          alt={note.nombre}
          loading="lazy"
        />
        {note.contenido.map(item =>
          <div key={item.id}>
        <Typography align='justify' marginTop={4}>{item}</Typography> </div>)}

        <Typography align='left' marginTop={10}>Web:</Typography>
        <Typography align='left'><a href={note.web}>{note.web} </a></Typography>
      </Box>
      <Pie />
    </Box>
  );
}