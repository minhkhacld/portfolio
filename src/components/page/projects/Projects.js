import React from 'react';
import { useLocation } from 'react-router-dom';
import Mobile from './mobile/Mobile';
import './Projects.css';
import Web from './web/Web';

const Projects = () => {
    const location = useLocation();
    const path = location.pathname.split('/');
    return (
        <div className="cv-projects" style={{
            paddingTop: path[path.length - 1] === "" ? 60 : 0
        }}>
            {path[path.length - 1] === "" &&
                <div div className="part-skill">Projects</div>
            }
            <Mobile />
            <Web />     

        </div>
    )
}

export default Projects