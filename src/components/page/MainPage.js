import React from 'react';
import MouseParticles from "react-mouse-particles";
import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../kits/animated/ScrollToTop';
import useScreenSize from '../kits/media/Device.Measuring';
import Sound from '../kits/media/Sound';
import { ColCenter } from '../kits/stucture/component.stucture';
import Contact from './contact/Contact';
import Home from './home/Home';
import Main from './main/Main';
import './MainPage.css';
import NavBar from './navBar/NavBar';
import ProjectMobileModal from './projects/modal/ProjectMobile.Modal';
import Projects from './projects/Projects';
import Skill from './skill/Skill';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const screenSize = useScreenSize();
    const store = useSelector(store => store.Reducer);

    window.addEventListener('load', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    return (
        <ColCenter className="cv-container">
            <NavBar />
            <Sound />
            <MouseParticles
                g={2.3}
                num={1}
                radius={8}
                life={1}
                v={1.2}
                color={['white', 'var(--lightBlue)', 'var(--organ)', 'var(--lightYellow)']}
                alpha={0.5}
                level={6}
            />
            {store.isModalOpen &&
                <ProjectMobileModal />
            }
            {
                screenSize.isXSmall &&
                <ScrollToTop />
            }
            <ColCenter className="cv-content-container">
                {/* <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="skill" element={<Skill />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes> */}
                <Routes>
                    <Route path="/profilo" element={<Main />} />
                    <Route path="/profilo/about" element={<Home />} />
                    <Route path="/profilo/skill" element={<Skill />} />
                    <Route path="/profilo/projects" element={<Projects />} />
                    <Route path="/profilo/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/profilo" />} />
                </Routes>
            </ColCenter>
        </ColCenter>
    );
};


export default MainPage