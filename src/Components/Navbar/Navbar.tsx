import React, { useState } from 'react';
import './Navbar.css';
import { navItems, NavItem } from './web-pages-data';
import Logo_Img from '../../Assets/Images/Archangel Michael Website Logo.png'

const ChurchName = "Archangel Michael Coptic Orthodox Church"
const Navbar: React.FC = () => {
    const [active, setActive] = useState(navItems[0].name);
    const [isOpen, setIsOpen] = useState(false); // track mobile menu open

    const handleNavigation = (item: NavItem) => {
        setActive(item.name);
        setIsOpen(false); // close menu on select
        window.location.href = item.href;
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <a href='/'>
                    <img src={Logo_Img} alt={ChurchName} className="logo"/>
                </a>
                <div className="church">
                    <div className="church_name">Archangel Michael</div>
                    <div className="coptic_church">American Coptic Orthodox Church</div>
                </div>
            </div>


            <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.name} className="nav-item">
                        <button
                            className={`nav-button ${active === item.name ? 'selected' : ''}`}
                            onClick={() => handleNavigation(item)}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
