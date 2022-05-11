import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useScreenSize from '../../kits/media/Device.Measuring';
import { ColLeft } from '../../kits/stucture/component.stucture';
import './NavBar.css';
// import styled, { keyframes } from 'styled-components';

const NavBar = () => {
    const navBarArr = [
        // { path: '/', pathname: "", text: "About", id: "nav-home", },
        // { path: '/skill', pathname: "skill", text: "My skill", id: "nav-skill", },
        // { path: '/projects', pathname: "projects", text: "Projects", id: "nav-projects", },
        // { path: '/contact', pathname: "contact", text: "Contact", id: "nav-contact", },
        { path: '/profilo', pathname: "profilo", text: "About", id: "nav-home", },
        { path: '/profilo/skill', pathname: "skill", text: "My skill", id: "nav-skill", },
        { path: '/profilo/projects', pathname: "projects", text: "Projects", id: "nav-projects", },
        { path: '/profilo/contact', pathname: "contact", text: "Contact", id: "nav-contact", },
    ]
    const screenSize = useScreenSize();
    const [menuOpen, setMenuOpen] = React.useState(screenSize.isXSmall ? false : true);


    const _onOpenMenu = () => {
        setMenuOpen(!menuOpen);
    }

    //assigning location variable
    const location = useLocation();
    const navigate = useNavigate();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const _onSwitchRoute = (item) => {
        if (screenSize.isXSmall || screenSize.isSmall) {
            setMenuOpen(false)
        }
        navBarArr.forEach(d => {
            const navChild = document.getElementById(d.id);
            if (d.id === item.id) {
                navChild.style.color = 'var(--lightBlue)';
            } else {
                navChild.style.color = 'white';
            }
        })
        window.addEventListener('load', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    };

    const _onGoToFirstPage = () => {
        navigate('/');
        setMenuOpen(false)
    }

    return (
        <div className="cv-nav-container">

            <div className="cv-nav-left">
                <div className="cv-nav-left-menu">
                    <FaBars className="cv-nav-left-menu-icon" onClick={() => _onOpenMenu()} />
                </div>
                <div className="cv-nav-left-logo">
                    <img className="cv-nav-left-logo-picture" src={require('../../../assets/picture/logo.png')} alt={'Logo'}
                        onClick={() => _onGoToFirstPage()}
                    />
                </div>
            </div>

            {menuOpen &&
                <div className="cv-nav-right">
                    {navBarArr.map((item, index) => {
                        return (
                            <Link to={item.path} className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link" : "navbar-link"}
                                onClick={() => _onSwitchRoute(item)}
                                style={{ textDecoration: 'none' }}>
                                <div className="nav-child-middle">
                                    <ColLeft className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link-text" : "navbar-link-text"} id={item.id}>
                                        {item.text}
                                    </ColLeft>
                                </div>
                            </Link>
                        )
                    })}
                    {/* {navBarArr.map((item, index) => {
                        return (
                            <Link to={item.path} className={splitLocation[1] === item.pathname ? "navbar-active-link" : "navbar-link"}
                                onClick={() => _onSwitchRoute(item)}
                                style={{ textDecoration: 'none' }}>
                                <div className="nav-child-middle">
                                    <ColLeft className={splitLocation[1] === item.pathname ? "navbar-active-link-text" : "navbar-link-text"} id={item.id}>
                                        {item.text}
                                    </ColLeft>
                                </div>
                            </Link>
                        )
                    })} */}
                    {/* <Link to='/' className={splitLocation[1] === "" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "" ? "navbar-active-link-text" : "navbar-link-text"} id="nav-home">
                                Home
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/skill' className={splitLocation[1] === "skill" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "skill" ? "navbar-active-link-text" : "navbar-link-text"} id="nav-skill">
                                My skill
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/projects' className={splitLocation[1] === "projects" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "projects" ? "navbar-active-link-text" : "navbar-link-text"} id="nav-projects">
                                Projects
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/contact' className={splitLocation[1] === "contact" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "contact" ? "navbar-active-link-text" : "navbar-link-text"} id="nav-contact">
                                Contact
                            </ColLeft>
                        </div>
                    </Link> */}
                </div>
            }


        </div>
    )
}

export default NavBar