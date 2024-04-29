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

export default function Inovações({inovações}) {
  return (
    <Box>
      <NavBar />
      <Box margin={4}>
        <h1>Inovações</h1>
      </Box>
      <Box margin={4}>
        {inovações.map(inovaçõe =>
          <Box key={inovaçõe.id}>
            <Accordion>
              <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
              >
                <Typography>{inovaçõe.nombre}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {inovaçõe.titulo}
                </Typography>
                <Link to={`/inovações/${inovaçõe.id}`}>Clique para mais informações</Link>
              </AccordionDetails>
            </Accordion>
          </Box>
        )}
      </Box>
      <Pie />
    </Box>
  )
}