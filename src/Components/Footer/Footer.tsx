import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaSoundcloud } from 'react-icons/fa';
import {ADDRESS, EMAIL, NUMBER, IG, FB, YOUTUBE, SoundCloud} from "./Footer-data";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>{ADDRESS}</p>
                    <p>Email: {EMAIL}</p>
                    <p>Phone: {NUMBER}</p>
                </div>

                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href={IG} target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ color: '#E4405F' }} />
                        </a>
                        <a href={YOUTUBE} target="_blank" rel="noopener noreferrer">
                            <FaYoutube style={{ color: '#FF0000' }} />
                        </a>
                        <a href={FB} target="_blank" rel="noopener noreferrer">
                            <FaFacebookF style={{ color: '#1877F2' }} />
                        </a>
                        <a href={SoundCloud} target="_blank" rel="noopener noreferrer">
                            <FaSoundcloud style={{ color: '#FF5500' }} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
