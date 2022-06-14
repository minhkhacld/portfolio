import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useScreenSize from '../../kits/media/Device.Measuring';
import './NavBar.css';

const NavBar = () => {

    const navBarArr = [
        { path: '/', pathname: "", text: "About", id: "nav-home", },
        { path: '/skill', pathname: "skill", text: "My skill", id: "nav-skill", },
        { path: '/projects', pathname: "projects", text: "Projects", id: "nav-projects", },
        { path: '/contact', pathname: "contact", text: "Contact", id: "nav-contact", },
    ];

    const screenSize = useScreenSize();
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        setMenuOpen(screenSize.isXSmall ? false : true);
    }, [screenSize.isXSmall]);


    const _onOpenMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
        };

        navBarArr.forEach((d, index) => {
            const frame = document.getElementById(`${item.id}-${index}`)
            const navChild = document.getElementById(d.id);
            if (d.id === item.id) {
                navChild.style.color = 'var(--lightBlue)';
            } else {
                navChild.style.color = 'white';
                frame.style.backgroundColor = 'var(--black)';
                frame.style.borderBottom = 'none';
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
        stroke-dasharray: ${!screenSize.isXSmall && !screenSize.isSmall ? WIDTH / 2 : 0} ${TOTAL_LENGTH};
        stroke-dashoffset: -${WIDTH + HEIGHT / 2};
        stroke-width: 3px;
        fill: transparent;
        stroke: var(--lightBlue);
        border-bottom: ${screenSize.isXSmall ? "none" : "5px solid black"};
        transition: stroke-width .8s, stroke-dashoffset .8s, stroke-dasharray .8s;     
    }
    &:hover .shape{
        stroke-width: 2px;
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
                    {/* <img className="cv-nav-left-logo-picture" src={require('../../../assets/picture/logo.png')} alt={'Logo'}
                        onClick={() => _onGoToFirstPage()}
                    /> */}
                    <svg width="512" height="512" onClick={() => _onGoToFirstPage()} className="cv-nav-left-logo-picture" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="container">
                            <g id="Frame 2">
                                <rect width="512" height="512" rx="10" fill="#1A1A1A" />
                            </g>
                            <g id="rightk">
                                <path id="Rectangle 1" d="M423.849 126.114C442.973 106.838 424.352 74.66 398.11 81.6357V81.6357C393.542 82.8501 389.379 85.2589 386.05 88.6146L229.904 246.005C217.636 258.371 218.093 278.45 230.909 290.246L384.84 431.911C388.951 435.695 394.054 438.228 399.553 439.216V439.216C427.998 444.325 445.975 409.63 425.396 389.339L314.549 280.037C302.442 268.099 302.335 248.597 314.31 236.527L423.849 126.114Z" fill="#03F3CF" />
                                <path id="Rectangle 1_2" d="M394.574 125.702C413.699 106.426 395.078 74.2479 368.836 81.2236V81.2236C364.268 82.438 360.105 84.8468 356.776 88.2025L200.629 245.593C188.362 257.958 188.819 278.038 201.635 289.833L355.566 431.499C359.676 435.283 364.78 437.816 370.279 438.804V438.804C398.724 443.913 416.701 409.218 396.122 388.927L285.275 279.625C273.168 267.687 273.061 248.185 285.035 236.114L394.574 125.702Z" fill="#FFEF82" />
                            </g>
                            <g id="leftk">
                                <path id="Rectangle 1_3" d="M178.317 108.864C178.317 91.8974 164.563 78.1436 147.597 78.1436H145.579C128.613 78.1436 114.859 91.8974 114.859 108.864V401.637C114.859 418.604 128.613 432.357 145.579 432.357H147.597C164.563 432.357 178.317 418.604 178.317 401.637V108.864Z" fill="#03F3CF" />
                                <path id="Rectangle 1_4" d="M156.458 113.798C156.458 96.8319 142.704 83.0781 125.738 83.0781H123.72C106.754 83.0781 92.9999 96.8319 92.9999 113.798V406.572C92.9999 423.538 106.754 437.292 123.72 437.292H125.738C142.704 437.292 156.458 423.538 156.458 406.572V113.798Z" fill="#FFEF82" />
                            </g>
                        </g>
                    </svg>

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
                                <WrapperSVG height="100%" width="100%" id={`${item.id}-${index}`}>
                                    <rect className="shape" x="5%" y="10%" height="80%" width="90%" />
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