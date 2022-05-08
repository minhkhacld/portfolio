import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import useScreenSize from '../../kits/media/Device.Measuring';
import { ColLeft } from '../../kits/stucture/component.stucture';
import './NavBar.css';

const NavBar = () => {

    const screenSize = useScreenSize();
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        if (screenSize.isXSmall) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }, [screenSize.isXSmall])

    const _onOpenMenu = () => {
        setMenuOpen(!menuOpen);
    }

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const _onSwitchRoute = () => {
        if (screenSize.isXSmall || screenSize.isSmall) {
            setMenuOpen(false)
        }
    };

    return (
        <div className="cv-nav-container">

            <div className="cv-nav-left">
                <div className="cv-nav-left-menu">
                    <FaBars className="cv-nav-left-menu-icon" onClick={() => _onOpenMenu()} />
                </div>
                <div className="cv-nav-left-logo">
                    <img className="cv-nav-left-logo-picture" src={require('../../../assets/picture/logo.png')} alt={'Logo'} />
                </div>
            </div>

            {menuOpen &&
                <div className="cv-nav-right">
                    <Link to='/' className={splitLocation[1] === "" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "" ? "navbar-active-link-text" : "navbar-link-text"}>
                                About
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/skill' className={splitLocation[1] === "skill" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "skill" ? "navbar-active-link-text" : "navbar-link-text"}>
                                My skill
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/projects' className={splitLocation[1] === "projects" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "projects" ? "navbar-active-link-text" : "navbar-link-text"}>
                                Projects
                            </ColLeft>
                        </div>
                    </Link>
                    <Link to='/contact' className={splitLocation[1] === "contact" ? "navbar-active-link" : "navbar-link"}
                        onClick={() => _onSwitchRoute()}
                        style={{ textDecoration: 'none' }}>
                        <div className="nav-child-middle">
                            <ColLeft className={splitLocation[1] === "contact" ? "navbar-active-link-text" : "navbar-link-text"}>
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