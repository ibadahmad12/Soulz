import React, { useState } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import logo from '../../assets/favicon.ico';
import './navbar.scss';

function Navbar() {
    const [hamburgerOpenClass, setHamburgerOpenClass] = useState('menu-open');
    const [hamburgerCloseClass, setHamburgerCloseClass] = useState('menu-close');

    return (
        <nav className="navbar-flex">
            <img src={logo} className="logo" alt="logo" />
            <ul>
                <li>Home</li>
                <li>Team</li>
                <li>Roadmap</li>
                <li>FAQ</li>
            </ul>

            <div className="social-nav-icons">
                <i>
                    <FaTwitter size={23} />
                </i>
                <i>
                    <FaInstagram size={23} />
                </i>
            </div>

            <i className={hamburgerOpenClass}>
                <HiMenuAlt3 size={30} />
            </i>
            <i className={hamburgerCloseClass}>
                <IoMdClose size={30} />
            </i>
        </nav>
    );
}

export default Navbar;
