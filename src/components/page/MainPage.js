import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sound from '../kits/media/Sound';
import { ColCenter } from '../kits/stucture/component.stucture';
import Contact from './contact/Contact';
import Home from './home/Home';
import './MainPage.css';
import NavBar from './navBar/NavBar';
import Project from './project/Project';
import Skill from './skill/Skill';



const MainPage = () => {

    return (
        <ColCenter className="cv-container">
            <NavBar />
            <Sound />
            <ColCenter className="cv-content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="skill" element={<Skill />} />
                    <Route path="projects" element={<Project />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </ColCenter>
        </ColCenter>
    );
};


export default MainPage