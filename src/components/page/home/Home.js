import React from 'react';
import HomeCanvas from './canvas/Home.Canvas';
import './Home.css';
import HomeQuote from './quote/Home.Quote';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const path = location.pathname.split('/');

  return (
    <div className="cv-home">
      {path[path.length - 1] === "profilo" &&
        <div div className="part-skill">About</div>
      }
      <HomeQuote />
      <HomeCanvas />
    </div>
  )
}

export default Home