import React from 'react';
import logo from '../../assets/favicon.ico';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrap">
            <div>
                <h4>Contact</h4>
                <p>Soulznft@gmail.com</p>
            </div>

            <img src={logo} alt="logo" />

            <div>
                <h4>Follow</h4>
                <div className="social-links">
                    <i>
                        <a href="https://twitter.com/SoulZ_NFT" target="_blank" alt="discord icon" rel="noreferrer">
                            <FaTwitter size={22} />
                        </a>
                    </i>
                    <i>
                        <a href="https://www.instagram.com/soulz_nft/" target="_blank" alt="discord icon" rel="noreferrer">
                            <FaInstagram size={22} />
                        </a>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default Footer;
