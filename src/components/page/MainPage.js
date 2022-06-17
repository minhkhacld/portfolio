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
import Modal from 'react-modal';
import ScrollToTopBig from '../kits/animated/ScrollToTopBig';
import { useLocation } from 'react-router-dom';
import Appads from '../page/appads/App-ads';
import PageTransition from '../kits/animated/PageTransition';

Modal.setAppElement('#root');

let delay = (function () {
    let timer = 1100;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


const MainPage = () => {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        setLoading(true);
        delay(() => {
            setLoading(false)
        }, 1100);
    }, [])

    const location = useLocation();
    const path = location.pathname.split('/');
    const screenSize = useScreenSize();
    const store = useSelector(store => store.Reducer);
    window.onscroll = function () {
        if ((window.innerHeight + window.scrollY + 1000) >= document.body.scrollHeight) {
            // you're at the bottom of the page
            document.getElementById("scroll-to-top-big-frame").style.display = "flex";
        } else {
            document.getElementById("scroll-to-top-big-frame").style.display = "none";
        }
    };
    window.addEventListener('load', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    return (
        <div style={{ width: '100%', height: '100%' }}>
            {loading ?
                <PageTransition /> :
                <ColCenter className="cv-container" id="cv-container">
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
                    {
                        !screenSize.isXSmall && path[path.length - 1] === "" &&
                        <ScrollToTopBig />

                    }
                    <ColCenter className="cv-content-container">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/about" element={<Home />} />
                            <Route path="skill" element={<Skill />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="/app-ads.txt" element={<Appads />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                        {/* <Routes>
                        <Route path="/profilo" element={<Main />} />
                        <Route path="/profilo/about" element={<Home />} />
                        <Route path="/profilo/skill" element={<Skill />} />
                        <Route path="/profilo/projects" element={<Projects />} />
                        <Route path="/profilo/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/profilo" />} />
                    </Routes> */}
                    </ColCenter>
                </ColCenter>
            }
        </div>

    );
};


export default MainPage