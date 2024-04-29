import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img1 from '../images/imagenes_inicial/II/01.001.jpg';
import img2 from '../images/imagenes_inicial/II/02.001.jpg';
import img3 from '../images/imagenes_inicial/II/03.001.jpg';
import img4 from '../images/imagenes_inicial/II/04.001.jpg';
import img5 from '../images/imagenes_inicial/II/05.001.jpg';
import img6 from '../images/imagenes_inicial/II/06.001.jpg';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'U.S. Department of State, Washington, D.C., USA.',
    imgPath: img1,
  },
  {
    label: 'The Recovery Accountability and Transparency Board,   Washington D.C., USA.',
    imgPath: img2,
  },
  {
    label: 'Service Canada, Ottawa, Canada.',
    imgPath: img3,
  },
  {
    label: 'School of Public Policy and Governance, University of Toronto, Toronto, Canada.',
    imgPath: img4,
  },
  {
    label: 'Comisión Económica para América Latina y el Caribe (CEPAL), Naciones Unidas, Santiago de Chile, Chile.',
    imgPath: img5,
  },
  {
    label: 'Ministerio Secretaría General de la Presidencia, Palacio de la Moneda, Santiago de Chile, Chile.',
    imgPath: img6,
  },
];

export function Slider()
  {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box       
      height={600}
      width={1200}
    >

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                height={566.39}
                width={1180}
                sx={{
                  overflow: 'hidden',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box 
        marginTop={-10}
        p={2}
        position = {'absolute'}
       >
      <Paper
        square
        elevation={3}
        sx={{color: 'white', bgcolor: '#00000080'}}       
      
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      </Box>
      <Box >
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
      </Box>
    </Box>
  );
}

