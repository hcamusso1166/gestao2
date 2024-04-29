
import * as React from 'react';
import '../App.css';

import { NavBar } from './NavBar';
import { PieBar } from './PieBar';
import { Pie } from './Pie';
import {Slider} from './Slider';
import { CenteredText } from './CenteredText';
import { StandardImageList } from './StandardImageList';
import Box from '@mui/material/Box';


export default function iniciação () {
    return (
        <div className="App">
          <NavBar />
          <Box
            p={2}
            margin={1}
            display="flex"
            flexDirection= "column"
            alignItems="center"
          >
            <Slider color="secondary"/>
            <CenteredText color="secondary"/>
            <StandardImageList />
          </Box>
          <PieBar />
          <Pie />
        </div>
      );
}