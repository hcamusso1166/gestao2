import * as React from 'react';
import { Pie } from './Pie';
import '../App.css';
import { NavBar } from './NavBar';
import { Box } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo1 from '../images/Canada2.png';
import logo2 from '../images/USA2.png';
import logo3 from '../images/Chile2.png';

export default function Países() {
    return (
        <Box>
          <NavBar />
          <Box margin={4}>
            <h1>Países</h1>
          </Box>
          <Box
            sx={{  
              display: 'flex',
              justifyContent: 'space-around'}}
          >
            <ImageList sx={{ width: 1200, height: 210, p: 5, ml:15}} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  
                  <a href = {`/Países/${item.title}`}>
                  <img
                    srcSet={`${item.img}?w=115&h=115&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=115&h=115&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  </a>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Pie />
        </Box>
    );
}

const itemData = [
    {
    id : 1,
      img: logo1,
      title: 'Canadá',
      link : "",
    },
    {
        id: 2,
      img: logo2,
      title: 'USA',
      link : "",
    },
    {
        id: 3,
      img: logo3,
      title: 'Chile',
      link : "",
    }    
  ];