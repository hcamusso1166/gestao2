import * as React from 'react';

import { Link } from 'react-router-dom';
import '../App.css';

import { NavBar } from './NavBar';
import { Pie } from './Pie';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Box } from '@material-ui/core';

export default function Instituições({instituições}) {
  return (
    <Box>
      <NavBar />
      <Box 
        margin={4}
      >
        <h1>Instituições</h1>
      </Box>
      
      <Box
        margin={4}
      >
        {instituições.map(instituiçõe =>
          <Box key={instituiçõe.id}>
            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                
                <Typography>{instituiçõe.nombre}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  height={80}
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
                  <img
                    srcSet={`${instituiçõe.img}?w=150&h=76&fit=crop&auto=format&dpr=2 2x`}
                    src={`${instituiçõe.img}?w=150&h=76&fit=crop&auto=format`}
                    alt={instituiçõe.nombre}
                    loading="lazy"
                    
                  />
                  <Box
                    display="flex"
                    flexDirection= 'column'
                    margin={10}
                    >
                    <Typography>
                      {instituiçõe.titulo}
                    </Typography>
                    <Link to={`/instituições/${instituiçõe.id}`}>Clique para mais informações</Link>
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
