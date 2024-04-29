import * as React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Pie } from './Pie';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../App.css';

import { NavBar } from './NavBar';


export default function Inovaçõe({inovações}) {
  const inovaid = useParams().id
  const note = inovações.find(n => n.id === Number(inovaid))
  console.log("inovaid",inovaid)
  console.log("note")
  console.log(note)

  return (
    <Box>
      <NavBar />
      <Box margin={4}>
        <h2>{note.nombre}</h2>
        {note.contenido.map(item =>
          <Box key={item.id} margin={4}>
            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>{item.nombre}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  display="flex"
                  flexDirection= 'row'
                  alignItems='center'
                  
                  >
                  <img
                    srcSet={`${item.img}?w=150&h=76&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=150&h=76&fit=crop&auto=format`}
                    alt={item.nombre}
                    loading="lazy"
                  />
                  <Box
                  display="flex"
                  flexDirection= 'column'
                  ml={2}>
                  
                  <Link to={`/inovações/${note.id}/${item.id}`}>Clique para mais informações</Link>
                  </Box>

                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
        
        
      </Box>
      <Pie />
    </Box>
  );
}