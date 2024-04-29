import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export function StandardImageList() {
  return (
    <ImageList sx={{ width: 1200, height: 200 }} cols={6} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a href = {item.web}>
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
  );
}

const itemData = [
  {
    img: "/images/Logos_cambiar/BID.png",
    title: 'BID',
    web : "http://www.iadb.org/",
  },
  {
    img: "/images/Logos_cambiar/Brasil.png",
    title: 'Brasil',
    web : "http://planejamento.gov.br",
  },
  {
    img: "/images/Logos_cambiar/BBR.png",
    title: 'BBYR',
    web : "http://bbyr.com",
  },
  {
    img: '/images/Logos_cambiar/e-Strategia.png',
    title: 'eStrategia',
    web : "http://e-strategiapublica.com.br/"
  },
  {
    img: "/images/Logos_cambiar/CONSAD.png",
    title: 'CONSAD',
    web : "http://www.consad.org.br",
  },
  {
    img: "/images/Logos_cambiar/CONSEPLAN.png",
    title: 'CONSEPLAN',
    web : "http://www.conseplan.org.br",
  },
  
];