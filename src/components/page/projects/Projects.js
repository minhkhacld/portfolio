import React from 'react'
import './Projects.css';
import Mobile from './mobile/Mobile';
import Web from './web/Web';
import ProjectMobileModal from './modal/ProjectMobile.Modal';
import { useSelector } from 'react-redux';

const Projects = () => {

    const store = useSelector(store => store.Reducer);
    return (
        <div className="cv-projects">
            <Mobile />
            <Web />
            {store.isModalOpen &&
                <ProjectMobileModal />
            }
        </div>
    )
}

export default Projects