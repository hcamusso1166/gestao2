import * as React from 'react';

import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import '../App.css';

import { NavBar } from './NavBar';
import { Pie } from './Pie';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Especialistas({especialistas}) {
  return (
    <Box>
      <NavBar />
        <Box margin={4}>
          {especialistas.map(especialista =>
            <div key={especialista.id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{especialista.nombre}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Link to={`/Especialista/${especialista.id}`}>Clique para mais informações</Link>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </Box>
        <Pie />
    </Box>
  )
}