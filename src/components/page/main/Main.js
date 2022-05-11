import React from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Skill from '../skill/Skill';
import './Main.css';

const Main = () => {

    window.addEventListener("scroll", () => {
        const home = document.getElementById("home-section");
        const skill = document.getElementById("skill-section");
        const project = document.getElementById("project-section");
        const contact = document.getElementById("contact-section");
        const navHome = document.getElementById("nav-home");
        const navSkill = document.getElementById("nav-skill");
        const navProjects = document.getElementById("nav-projects");
        const navContact = document.getElementById("nav-contact");
        let scrollY = window.scrollY;
        let homeCal = home.offsetTop + home.offsetHeight - 100;
        let skillCal = skill.offsetTop + skill.offsetHeight - 100;
        let projectsCal = project.offsetTop + project.offsetHeight - 100;
        let contactCal = contact.offsetTop + contact.offsetHeight - 100;

        if (scrollY <= homeCal) {
            navHome.style.color = 'var(--lightBlue)';
            navSkill.style.color = 'white';
            navProjects.style.color = 'white';
            navContact.style.color = 'white';
        } else if (scrollY <= skillCal && scrollY > homeCal) {
            navHome.style.color = 'white';
            navSkill.style.color = 'var(--lightBlue)';
            navProjects.style.color = 'white';
            navContact.style.color = 'white';
        }
        else if (scrollY <= projectsCal && scrollY > skillCal) {
            navHome.style.color = 'white';
            navSkill.style.color = 'white';
            navProjects.style.color = 'var(--lightBlue)';
            navContact.style.color = 'white';
        }
        else if (scrollY <= contactCal && scrollY > projectsCal) {
            navHome.style.color = 'white';
            navSkill.style.color = 'white';
            navProjects.style.color = 'white';
            navContact.style.color = 'var(--lightBlue)';
        }
    });


    return (
        <div className="cv-main">
            <div className="main-part" id="home-section">
                {/* <div className="part-skill">About</div> */}
                <Home />
            </div>
            <div className="main-part" id="skill-section">
                {/* <div className="part-skill">Skill</div> */}
                <Skill />
            </div>
            <div className="main-part" id="project-section">
                {/* <div className="part-skill">Projects</div> */}
                <Projects />
            </div>
            <div className="main-part" id="contact-section">
                {/* <div className="part-skill">Contact</div> */}
                <Contact />
            </div>
        </div>


    )
}

export default Main