import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Pie } from './Pie';
import { NavBar } from './NavBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Box } from '@material-ui/core';

export default function País({país}) {
  console.log(país[0].nombre)

  return (
    <Box>
      <NavBar />
      <Box margin={4}>
        <Typography>{país[0].nombre}</Typography>
      </Box>
      <Box margin={4}>
        {país.map(item =>
          <Box key={item.id}>
            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>{item.titulo}</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Box
                  height={210}
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
                    srcSet={`${item.img}?w=150&h=76&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=150&h=76&fit=crop&auto=format`}
                    alt={item.nombre}
                    loading="lazy"
                    
                  />
                  <Box margin={10}>
                    <Link to={`/Países/${item.nombre}/${item.id}`}>Clique para mais informações</Link>
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