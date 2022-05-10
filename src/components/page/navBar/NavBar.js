import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useScreenSize from '../../kits/media/Device.Measuring';
import { ColLeft } from '../../kits/stucture/component.stucture';
import './NavBar.css';
// import styled, { keyframes } from 'styled-components';

const NavBar = () => {

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

    const _onSwitchRoute = () => {
        if (screenSize.isXSmall || screenSize.isSmall) {
            setMenuOpen(false)
        }
    };

    const _onGoToFirstPage = () => {
        navigate('/');
        setMenuOpen(false)
    }

    // const animationLogo = keyframes`    
    // from {opacity:0.5;height:50%}
    // to{opacity:1;height:90%}
    // `
    // const WrapperLogo = styled.div`
    // width:100%;
    // animation-name:${animationLogo};
    // animation-duration:3s;
    // animation-delay:0s;
    // animation-timing-function:linear;
    // animation-fill-mode: forwards;
    // animation-iteration-count:infinite;
    // animation-direction:alternate;
    // `
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
                    <Link to='/' className={splitLocation[1] === "" ? "navbar-active-link" : "navbar-link"}
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
                    </Link>
                </div>
            }


        </div>
    )
}

export default NavBar