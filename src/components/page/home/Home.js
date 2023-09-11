import React from 'react';
import { Box } from '@mui/material';
// import HomeCanvas from './canvas/Home.Canvas';
import './Home.css';
import HomeQuote from './quote/Home.Quote';
import RoundingBird from './canvas/Rounding_brid';


const Home = () => {

  return (
    <Box component={'div'} className="cv-home" >
      <HomeQuote />
      {/* <HomeCanvas /> */}
      <RoundingBird />
    </Box>
  )
}

export default Home