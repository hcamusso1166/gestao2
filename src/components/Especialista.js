import * as React from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Pie } from './Pie';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
/*
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';*/
import '../App.css';

import { NavBar } from './NavBar';


export default function Especialista({especialistas}) {
  const id = useParams().id
  const note = especialistas.find(n => n.id === Number(id))
  return (
    <Box>
      <NavBar />
      <Box  
        height={450}
        width={1200}
        my={4}
        display="flex"
        flexDirection= 'row'
        alignItems="center"
        gap={4}
        p={2}
        margin={4}
        sx={{ border: '2px solid grey' }}
      >
      <Container>
      <Typography>{note.nombre}</Typography>
      

            <Accordion defaultExpanded>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>Detalhes da visita</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {note.contenido.detalles}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>Informações de contato</Typography>
              </AccordionSummary>
              <AccordionDetails
                  >
                <Typography>E-mail: <a href="mailto:{note.contenido.contacto.email}">{note.contenido.contacto.email}</a></Typography>
                <Typography>Telefone: {note.contenido.contacto.telefono}</Typography>
                <Typography>Informação: {note.contenido.contacto.informacion}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>Artigo científico</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography><a href={note.contenido.articulos}> {note.contenido.tituloArticulo} </a> </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>Apresentação</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography><a href={note.contenido.presentacion}> {note.contenido.tituloPresentacion} </a> </Typography>
              </AccordionDetails>
            </Accordion>
      
        
        
       
      </Container>
      
      <Container fixed>
        <img 
            srcSet={`${note.img}?w=600&h=442&fit=crop&auto=format&dpr=2 2x`}
            src={`${note.img}?w=600&h=442&fit=crop&auto=format`}
            alt={note.nombre}
            loading="lazy" />
        </Container>
        
      
    </Box>
    <Pie />
    </Box>
  );
}