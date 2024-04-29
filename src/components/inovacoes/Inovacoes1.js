import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export  function Inovscoes1() {
  return (
    <div>
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
          <a href="..inovacoes/GestaoEOrcamento/DirecaoDeOrcamentos">
            <img src="/images/Agencias/Chile/1DIPRES.png" width="182" height="178" alt="1DIPRES" style="margin-right: 10px; vertical-align: middle;"/></a>
            <a href="/pt/inovacoes-em-gestao-publica-e-planejamento/gestao-e-orcamento-incluindo-os-sistemas-de-avaliacao?id=29" style="line-height: 1.3em; text-align: justify;">Clique para mais&nbsp;informações</a>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}