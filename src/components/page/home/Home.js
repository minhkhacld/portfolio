import React from 'react'
import './Home.css'
import MouseParticles from "react-mouse-particles";
import HomeQuote from './quote/Home.Quote';
import HomeCanvas from './canvas/Home.Canvas';

const Home = () => {
  return (
    <div className="cv-home">
      <MouseParticles
        g={2.3}
        num={1}
        radius={8}
        life={0.1}
        v={1.2}
        color={['white', 'var(--lightBlue)', 'var(--organ)', 'var(--lightYellow)']}
        alpha={0.5}
        level={6}
      />
      <HomeQuote />
      <HomeCanvas />
    </div>
  )
}

export default Home