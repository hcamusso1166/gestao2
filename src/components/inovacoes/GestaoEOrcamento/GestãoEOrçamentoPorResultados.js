import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavBar } from '../../../components/NavBar';

export default function GestãoEOrçamentoPorResultados() {
  return (
    <div>
      <NavBar />
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Direção de Orçamentos (DIPRES), Ministério das Finanças</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/DIPRES">
             <img src="/images/Agencias/Chile/1DIPRES.png" width="182" height="178" alt="1DIPRES" /></a>
            <a href="../../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/DIPRES">
               Clique para mais informações </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Instituto Latino-americano e do Caribe de Planejamento Econômico e Social (ILPES), CEPAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/InstitutoLatinoAmericano">
               Clique para mais informações </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Centro de Sistemas Públicos, Universidade do Chile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/CentroDeSistemasPúblicos">
          Clique para mais informações </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Office of Management and Budget (OMB), Executive Office of the President</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> 
          <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/OMB">
          Clique para mais informações </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Centre of Excellence for Evaluation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados/CentreOfExcellenceForEvaluation">
          Clique para mais informações </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
