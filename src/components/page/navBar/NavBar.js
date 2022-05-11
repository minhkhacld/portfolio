import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useScreenSize from '../../kits/media/Device.Measuring';
import { ColLeft } from '../../kits/stucture/component.stucture';
import './NavBar.css';

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
                            <Link key={index} to={item.path} className={splitLocation[splitLocation.length - 1] === item.pathname ? "navbar-active-link" : "navbar-link"}
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

                </div>
            }
        </div>
    )
}

export default NavBar