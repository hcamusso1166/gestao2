import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavBar } from '../../../components/NavBar';

export default function DirecaoDeOrcamentos() {
  return (
    <div>
      <NavBar />
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Gestão e orçamento por resultados, incluindo sistemas de avaliação</Typography>
        </AccordionSummary>
        <AccordionDetails>
          < Typography>
          <a href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/GestãoEOrçamentoPorResultados">
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
          <Typography>Sistemas de apoio a decisão em governos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          < Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/SistemasDeApoio">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Integração e modernização de serviços aos cidadãos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/IntegraçãoEModernização">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Planejamento e gestão do desempenho do serviço civil e sistemas de alta direção pública</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Serviços administrativos compartilhados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/ServiçosAdministrativosCompartilhados">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Avaliação de desempenho governamental</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/AvaliaçãoDeDesempenhoGovernamental">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Economia de custos em licitações e compras</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/EconomiaDeCustosEmLicitaçõesECompras">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Transparência governamental e accountability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/TransparênciaGovernamentalEAccountability">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Avaliação do de investimento social</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/AvaliaçãoDoDeInvestimentoSocial">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Parceria público-privada</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="text" href="../../Inovações/GestaoEOrcamento/DirecaoDeOrcamentos/ParceriaPúblicoPrivada">
          Clique para mais informações
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
