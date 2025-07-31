import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="wave-container">
                <svg className="morphing-wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path className="wave-path path1"></path>
                </svg>
                <svg className="morphing-wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path className="wave-path path2"></path>
                </svg>
                <svg className="morphing-wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path className="wave-path path3"></path>
                </svg>
            </div>
            <div className="footer-content">
                <p>© 2025 MultiWaveFooter Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
