import React, { useEffect } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/favicon.ico';
import './navbar.scss';

const Navbar = () => {
    useEffect(() => {
        const burger = document.querySelector('.hamburger');
        burger?.addEventListener('click', () => {
            burger.classList.toggle('toggle');
        });
    }, []);

    return (
        <nav className="navbar-flex">
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            {/* <div className="mobile-nav-flex"> */}
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
                <li>
                    <a href="#faq">FAQ</a>
                </li>
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
            {/* </div> */}

            <div className="hamburger">
                <div className="stroke-1" />
                <div className="stroke-2" />
                <div className="stroke-3" />
            </div>
        </nav>
    );
};

export default Navbar;
