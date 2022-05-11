import React from 'react'
import './Home.css'
import ProjectMobileModal from '../projects/modal/ProjectMobile.Modal';
import HomeQuote from './quote/Home.Quote';
import HomeCanvas from './canvas/Home.Canvas';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const store = useSelector(store => store.Reducer);

  return (
    <div className="cv-home">
      {/* <div className="part-skill">About</div> */}
      <HomeQuote />
      <HomeCanvas />
      {store.isModalOpen && path === "" &&
        <ProjectMobileModal />
      }
    </div>
  )
}

export default Home