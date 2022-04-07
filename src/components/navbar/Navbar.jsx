import React, { useEffect } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/favicon.ico';
import './navbar.scss';

const Navbar = () => {
    useEffect(() => {
        const burger = document.querySelector('.burger');
        console.log(burger);
        burger?.addEventListener('click', () => {
            burger.classList.toggle('toggle');
        });
    }, []);

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

            <div className="burger">
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </nav>
    );
};

export default Navbar;
