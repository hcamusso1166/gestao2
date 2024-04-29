import * as React from 'react';
import '../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { NavBar } from './NavBar';
import { Pie } from './Pie';

export default function Contato() {
    return (
        <div>
            <NavBar />;
            <Box margin={4} >
                <h1>Contato</h1>
                <Typography>E-mail: <a href="mailto:bbyr@bbyr.com">bbyr@bbyr.com</a></Typography>
            </Box>
            <Pie />
        </div>
    )
}