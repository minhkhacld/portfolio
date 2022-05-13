import React from 'react';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Skill from '../skill/Skill';
import './Main.css';
import Helper from '../../kits/animated/Helper';
import useScreenSize from '../../kits/media/Device.Measuring';

const Main = () => {
    const screenSize = useScreenSize();

    window.addEventListener("scroll", () => {
        const home = document.getElementById("home-section");
        const skill = document.getElementById("skill-section");
        const project = document.getElementById("project-section");
        const contact = document.getElementById("contact-section");
        const fHome = document.getElementById("nav-home-0");
        const fSkill = document.getElementById("nav-skill-1");
        const fProjects = document.getElementById("nav-projects-2");
        const fContact = document.getElementById("nav-contact-3");
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
            fHome.classList.add("navbar-active-link");
            fHome.classList.remove("navbar-link");
            fSkill.classList.add("navbar-link");
            fSkill.classList.remove("navbar-active-link");
            fProjects.classList.add("navbar-link");
            fProjects.classList.remove("navbar-active-link");
            fContact.classList.add("navbar-link");
            fContact.classList.remove("navbar-active-link");
            navHome.style.fill = 'var(--lightBlue)';
            navSkill.style.fill = 'white';
            navProjects.style.fill = 'white';
            navContact.style.fill = 'white';
        } else if (scrollY <= skillCal && scrollY > homeCal) {
            fHome.classList.add("navbar-link");
            fHome.classList.remove("navbar-active-link");
            fSkill.classList.add("navbar-active-link");
            fSkill.classList.remove("navbar-link");
            fProjects.classList.add("navbar-link");
            fProjects.classList.remove("navbar-active-link");
            fContact.classList.add("navbar-link");
            fContact.classList.remove("navbar-active-link");
            navHome.style.fill = 'white';
            navSkill.style.fill = 'var(--lightBlue)';
            navProjects.style.fill = 'white';
            navContact.style.fill = 'white';
        }
        else if (scrollY <= projectsCal && scrollY > skillCal) {
            fHome.classList.add("navbar-link");
            fHome.classList.remove("navbar-active-link");
            fSkill.classList.add("navbar-link");
            fSkill.classList.remove("navbar-active-link");
            fProjects.classList.add("navbar-active-link");
            fProjects.classList.remove("navbar-link");
            fContact.classList.add("navbar-link");
            fContact.classList.remove("navbar-active-link");
            navHome.style.fill = 'white';
            navSkill.style.fill = 'white';
            navProjects.style.fill = 'var(--lightBlue)';
            navContact.style.fill = 'white';
        }
        else if (scrollY <= contactCal && scrollY > projectsCal) {
            fHome.classList.add("navbar-link");
            fHome.classList.remove("navbar-active-link");
            fSkill.classList.add("navbar-link");
            fSkill.classList.remove("navbar-active-link");
            fProjects.classList.add("navbar-link");
            fProjects.classList.remove("navbar-active-link");
            fContact.classList.add("navbar-active-link");
            fContact.classList.remove("navbar-link");
            navHome.style.fill = 'white';
            navSkill.style.fill = 'white';
            navProjects.style.fill = 'white';
            navContact.style.fill = 'var(--lightBlue)';
        }
    });


    return (
        <div className="cv-main">
            <div className="main-part" id="home-section">
                <Home />
                {
                    (screenSize.isMedium || screenSize.isLarge) &&
                    <Helper />
                }
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
        </div>


    )
}

export default Main