import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useScreenSize from '../../kits/media/Device.Measuring';
import { ColLeft } from '../../kits/stucture/component.stucture';
import './NavBar.css';
import styled from 'styled-components';

const NavBar = () => {
    const navBarArr = [
        { path: '/profilo', pathname: "profilo", text: "About", id: "nav-home", },
        { path: '/profilo/skill', pathname: "skill", text: "My skill", id: "nav-skill", },
        { path: '/profilo/projects', pathname: "projects", text: "Projects", id: "nav-projects", },
        { path: '/profilo/contact', pathname: "contact", text: "Contact", id: "nav-contact", },
    ]
    const screenSize = useScreenSize();
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        setMenuOpen(screenSize.isXSmall ? false : true);
    }, [screenSize.isXSmall])


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
        if (screenSize.isXSmall) {
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
    };

    const _onGoToFirstPage = () => {
        navigate('/');
        if (screenSize.isXSmall) {
            setMenuOpen(false)
        }
    };


    let WIDTH = window.screen.width * 0.8 / 2;
    let HEIGHT = window.screen.height * 0.8 / 2;
    let TOTAL_LENGTH = WIDTH * 2 + HEIGHT * 2;

    const WrapperSVG = styled.svg`
    .shape{
        stroke-dasharray: ${WIDTH / 2} ${TOTAL_LENGTH};
        stroke-dashoffset: -${WIDTH + HEIGHT / 2};
        stroke-width: 3px;
        fill: transparent;
        stroke: var(--lightBlue);
        border-bottom: 5px solid black;
        transition: stroke-width .8s, stroke-dashoffset .8s, stroke-dasharray .8s;     
    }
    &:hover .shape{
        stroke-width: 3px;
        stroke-dashoffset: 0;
        stroke-dasharray: ${TOTAL_LENGTH};
    }  
    .navbar-active-link-text{
        fill: var(--lightBlue);
    }

    .navbar-link-text{
        fill: white;
    }
    `

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
                            <Link key={index} to={item.path} className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link" : "navbar-link"}
                                id={`${item.id}-${index}`}
                                onClick={() => _onSwitchRoute(item)}
                                style={{ textDecoration: 'none' }}>
                                {/* <div className="nav-child-middle">
                                    <ColLeft className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link-text" : "navbar-link-text"} id={item.id}>
                                        {item.text}
                                    </ColLeft>
                                </div> */}

                                <WrapperSVG height="100%" width="100%"  id={`${item.id}-${index}`}>
                                    <rect className="shape" height="100%" width="100%" />
                                    <text x="50%" y="50%"
                                        className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link-text" : "navbar-link-text"} id={item.id}
                                        dominantBaseline="middle" textAnchor="middle">{item.text}</text>
                                </WrapperSVG>
                            </Link>
                        )
                    })}

                </div>
            }
        </div>
    )
}

export default NavBar