import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/dlogo.png'
import pfp from '../assets/pfp.png'
import { RiArrowDropDownLine } from 'react-icons/ri';
import '../styles/Styles.css'
import { MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    const [nav, setNav] = useState('dashboard')

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/db') {
            setNav('dashboard');
        }
        else if (location.pathname === '/recommended') {
            setNav('recommended');
        } else if (location.pathname === '/job') {
            setNav('jobs');
        } else {
            setNav(''); 
        }
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-expand-md navbar-white bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <MdMenu />
                </button>
                <div className={`collapse navbar-collapse ${menu ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto">
                        <li className={nav === 'dashboard' ? 'nav-item activee' : 'nav-item'} onClick={() => setNav('dashboard')}>
                            <Link to='/db' className='nav-link hm'>Dashboard</Link>
                        </li>
                        <li className={nav === 'recommended' ? 'nav-item activee' : 'nav-item'} onClick={() => setNav('recommended')}>
                            <Link to='/recommended' className='nav-link hm'>Recommended</Link>
                        </li>
                        <li className={nav === 'jobs' ? 'nav-item activee' : 'nav-item'} onClick={() => setNav('jobs')}>
                            <Link to='/job' className='nav-link hm'>Jobs</Link>
                        </li>
                        <li className={nav === 'application' ? 'nav-item activee' : 'nav-item'} onClick={() => setNav('application')}>
                            <a className="nav-link" href="#">Application</a>
                        </li>
                        <li className={nav === 'docs' ? 'nav-item activee' : 'nav-item'} onClick={() => setNav('docs')}>
                            <a className="nav-link" href="#">My Documents</a>
                        </li>
                    </ul>
                    <div className="nav-profile d-flex align-items-center mt-2 mt-md-0 gap-md-3 gap-2">
                        <h6>Brasie Cooper</h6>
                        <img src={pfp} alt="" />
                        <RiArrowDropDownLine />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
