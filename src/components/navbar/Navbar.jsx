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
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="#roadmap">Roadmap</a>
                </li>
                <li>FAQ</li>
            </ul>

            <div className="social-nav-icons">
                <i>
                    <a href="https://twitter.com/SoulZ_NFT" target="_blank" rel="noreferrer">
                        <FaTwitter size={23} />
                    </a>
                </i>
                <i>
                    <a href="https://www.instagram.com/accounts/login/?next=/soulz_nft/" target="_blank" rel="noreferrer">
                        <FaInstagram size={23} />
                    </a>
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
