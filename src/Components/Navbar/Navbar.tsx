import React, { useState } from 'react';
import './Navbar.css';
import { navItems, NavItem } from './web-pages-data';
import Logo_Img from '../../Assets/Images/Archangel Michael Website Logo.png'

const ChurchName = "Archangel Michael Coptic Orthodox Church"
const Navbar: React.FC = () => {
    const [active, setActive] = useState(navItems[0].name);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleNavigation = (item: NavItem) => {
        if (item.href) {
            window.location.href = item.href;
            setActive(item.name);
            setIsOpen(false);
        }
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
                    <li
                        key={item.name}
                        className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
                        onMouseEnter={() => item.submenu && setDropdownOpen(true)}
                        onMouseLeave={() => item.submenu && setDropdownOpen(false)}
                        onClick={() => {
                            if (item.submenu) {
                                setDropdownOpen(!dropdownOpen);
                            } else {
                                handleNavigation(item);
                            }
                        }}
                    >
                        <button
                            className={`nav-button ${active === item.name ? 'selected' : ''}`}
                        >
                            {item.name}
                        </button>
                        {item.submenu && dropdownOpen && (
                            <ul className="dropdown">
                                {item.submenu.map((subItem) => (
                                    <li key={subItem.name} className="dropdown-item">
                                        <button
                                            className="dropdown-button"
                                            onClick={() => handleNavigation(subItem)}
                                        >
                                            {subItem.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Navbar;
