import React from 'react';
import HomeCanvas from './canvas/Home.Canvas';
import './Home.css';
import HomeQuote from './quote/Home.Quote';


const Home = () => {


  return (
    <div className="cv-home">
      {/* <div className="part-skill">About</div> */}
      <HomeQuote />
      <HomeCanvas />   
    </div>
  )
}

export default Home