import React from 'react'
import Home from '../home/Home';
import Skill from '../skill/Skill';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import './Main.css'
import Modal from 'react-modal';
import ProjectMobileModal from '../projects/modal/ProjectMobile.Modal';
import { useSelector } from 'react-redux';

Modal.setAppElement(document.getElementById('root'));
const Main = () => {
    const store = useSelector(store => store.Reducer);
    window.addEventListener("scroll", function () {
        const home = document.getElementById("home-section");
        const skill = document.getElementById("skill-section");
        const project = document.getElementById("project-section");
        const contact = document.getElementById("contact-section");
        const navHome = document.getElementById("nav-home");
        const navSkill = document.getElementById("nav-skill");
        const navProjects = document.getElementById("nav-projects");
        const navContact = document.getElementById("nav-contact");


        if (window.scrollY > (home.offsetTop + home.offsetHeight)) {
            navHome.classList.add('navbar-link-text');
            navHome.classList.remove('navbar-active-link-text');
        } else if (window.scrollY <= (skill.offsetTop + skill.offsetHeight)) {
            navHome.classList.add('navbar-active-link-text');
            navHome.classList.remove('navbar-link-text');
        }
        if (window.scrollY > (skill.offsetTop + skill.offsetHeight)) {
            navSkill.classList.add('navbar-link-text');
            navSkill.classList.remove('navbar-active-link-text');
        } else if (window.scrollY <= (project.offsetTop + project.offsetHeight)) {
            navSkill.classList.add('navbar-active-link-text');
            navSkill.classList.remove('navbar-link-text');
        }
        if (window.scrollY > (contact.offsetTop + contact.offsetHeight)) {
            navProjects.classList.add('navbar-link-text');
            navProjects.classList.remove('navbar-active-link-text');
        } else {
            navProjects.classList.add('navbar-active-link-text');
            navProjects.classList.remove('navbar-link-text');
        }
        if (window.scrollY > (contact.offsetTop + contact.offsetHeight)) {
            navContact.classList.add('navbar-link-text');
            navContact.classList.remove('navbar-active-link-text');
        } else {
            navContact.classList.add('navbar-active-link-text');
            navContact.classList.remove('navbar-link-text');
        }
    });

    return (
        <div className="cv-main">
            <div className="main-part" id="home-section">
                <Home />
            </div>
            <div className="main-part" id="skill-section">
                <Skill />
            </div>
            <div className="main-part" id="project-section">
                <Projects />
            </div>
            <div className="main-part" id="contact-section">
                <Contact />
            </div>

            {store.isModalOpen &&
                <ProjectMobileModal />
            }
        </div>


    )
}

export default Main