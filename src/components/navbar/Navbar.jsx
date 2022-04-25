import React, { useEffect } from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/favicon.ico';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const burger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar-flex');

        burger?.addEventListener('click', () => {
            burger.classList.toggle('toggle');
            navbar.classList.toggle('navbar-mobile-flex');
        });

        underLinednNavLink();
    }, []);

    const closeMobileNav = () => {
        const burger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar-flex');

        burger.classList.remove('toggle');
        navbar.classList.remove('navbar-mobile-flex');
    };

    const underLinednNavLink = () => {
        const items = document.querySelectorAll('ul li');
        items.forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelector('li.active').classList.remove('active');
                item.classList.add('active');
            });
        });
    };

    return (
        <nav className="navbar-flex">
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul onClick={closeMobileNav}>
                <li className="active">
                    <a href="/#home">Home</a>
                </li>
                <li>
                    <a href="/#team">Team</a>
                </li>
                <li>
                    <a href="/#roadmap">Roadmap</a>
                </li>
                <li>
                    <a href="/#faq">FAQ</a>
                </li>
                <li>
                    <a onClick={() => navigate('/staking')}>Skating</a>
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

            <div className="hamburger">
                <div className="stroke-1" />
                <div className="stroke-2" />
                <div className="stroke-3" />
            </div>
        </nav>
    );
};

export default Navbar;
