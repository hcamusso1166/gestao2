import * as React from 'react';
import { useParams } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Box from '@mui/material/Box';
import { Pie } from './Pie';
import '../App.css';

import { NavBar } from './NavBar';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Item({inovações}) {


    const id = useParams().id
    const id2 = useParams().id2
    const note = inovações.find(n => n.id === Number(id))
    
    const item = note.contenido.find(i => i.id === Number(id2))
    console.log("ID",id)
    console.log("itemID2",id2)
    console.log("note.contenido",note.contenido)
    
    console.log("item",item)

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = item.images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

  return (
    <Box>
      <NavBar />
      <Box
        p={3}
        margin={1}
        sx={{ border: '2px solid grey' }}
      >
        <Typography><b>{item.nombre}</b></Typography>
        <Box 
          display="flex"
          flexDirection= 'row'
          alignItems="flex-start"
          p={2}
          margin={2}
          >
         {item.nombre !== 'Centre of Excellence for Evaluation' &&
         
          <img
            srcSet={`${item.img}?w=150&h=76&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=150&h=76&fit=crop&auto=format`}
            alt={item.nombre}
            loading="lazy"
            width={203}
            height={112}
          />}
          <Typography p={1} align="justify">{item.contenido}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection= 'row'
          alignItems="flex-start"
          p={2}
          margin={2}
        >
          <Box
            p={2}
            sx={{maxWidth: 590, flexGrow: 1 }}  
          >
            <Container>
              <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                <Typography>Página web</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography><a href={item.web}> {item.web} </a> </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                <Typography>Palestrante</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {item.palestrante.map(p => 
                  <div key={p.id}> 
                    <Typography><b>Palestrante {p.id} </b></Typography>
                    <Typography>{p.nombre}</Typography>
                  </div>)}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                <Typography>Inovação apresentada</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography><a href={item.inovacion}> Inovação apresentada </a> </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                <Typography>Aplicabilidade nos Estados do Brasil</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography><a href={item.aplicabilidade}> Aplicabilidade nos Estados do Brasil </a> </Typography>
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
                {item.apresentacao.map(p => 
                  <div key={p.id}> 
                    <Typography><a href={p.link}> {p.titulo} </a></Typography>
                  </div>)}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                <Typography>Contatar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography><b>Morada:</b> {item.morada}</Typography>
                  <Typography><b>Contato:</b> {item.contato}</Typography>
                  <Typography><b>Telefone:</b> {item.telefone}</Typography>
                  <Typography><b>Email:</b> {item.email.map(p => 
                    <div key={p.id}> 
                    <Typography><a href="mailto:{p}">{p}</a></Typography>
                    
                    </div>)}
                  </Typography>
              </AccordionDetails>
              </Accordion>
            </Container>
          </Box>
          {item.nombre !== 'Centre of Excellence for Evaluation' &&
          <Box       
            height={567}
            display="block"
            alignItems="center"
            p={2} 
            sx={{ maxWidth: 590, flexGrow: 1 }} 
          >
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {item.images.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                src={step.img}
                alt={step.img}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>}


        </Box>
        
      </Box>
      <Pie />
    </Box>
  );
}