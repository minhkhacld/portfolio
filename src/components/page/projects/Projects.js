import React from 'react'
import './Projects.css';
import Mobile from './mobile/Mobile';
import Web from './web/Web';
import ProjectMobileModal from './modal/ProjectMobile.Modal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Projects = () => {
    const location = useLocation();
    const path = location.pathname.split('/');
    const store = useSelector(store => store.Reducer);

    return (
        <div className="cv-projects" style={{
            paddingTop: path[path.length - 1] === "profilo" ? 60 : 0
        }}>
            {path[path.length - 1] === "profilo" &&
                <div div className="part-skill">Projects</div>
            }
            <Mobile />
            <Web />
            {store.isModalOpen && path[path.length - 1] === "projects" &&
                <ProjectMobileModal />
            }

        </div>
    )
}

export default Projects