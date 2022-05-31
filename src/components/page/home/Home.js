import React from 'react';
// import HomeCanvas from './canvas/Home.Canvas';
import './Home.css';
import HomeQuote from './quote/Home.Quote';
import RoundingBird from './canvas/Rounding_brid';

const Home = () => {

  return (
    <div className="cv-home">
      <HomeQuote />
      {/* <HomeCanvas /> */}
      <RoundingBird />
    </div>
  )
}

export default Home