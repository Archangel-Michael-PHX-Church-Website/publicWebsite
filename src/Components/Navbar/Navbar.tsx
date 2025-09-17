import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { navItems, NavItem } from './web-pages-data';
import Logo_Img from '../../Assets/Images/Archangel Michael Website Logo.png'

const ChurchName = "Archangel Michael Coptic Orthodox Church"

const Navbar: React.FC = () => {
    const [active, setActive] = useState(navItems[0].name);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // track which dropdown is open

    // Sync active tab with current URL on load
    useEffect(() => {
        const currentPath = window.location.pathname;
        const currentItem = navItems.find(item => {
            if (item.href === currentPath) return true;
            if (item.submenu) return item.submenu.some(sub => sub.href === currentPath);
            return false;
        });
        if (currentItem) {
            setActive(currentItem.name);
        }
    }, []);

    const handleNavigation = (item: NavItem, parent?: NavItem) => {
        if (item.href) {
            window.location.href = item.href;
            setActive(parent ? parent.name : item.name);
            setIsOpen(false);
            setDropdownOpen(null);
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
                        onMouseEnter={() => item.submenu && setDropdownOpen(item.name)}
                        onMouseLeave={() => item.submenu && setDropdownOpen(null)}
                        onClick={() => {
                            if (item.submenu) {
                                setDropdownOpen(dropdownOpen === item.name ? null : item.name);
                            } else {
                                handleNavigation(item);
                            }
                        }}
                    >
                        <button
                            className={`nav-button ${
                                active === item.name ||
                                (item.submenu && item.submenu.some(sub => sub.name === active))
                                    ? 'selected'
                                    : ''
                            }`}
                        >
                            {item.name}
                        </button>

                        {item.submenu && dropdownOpen === item.name && (
                            <ul className="dropdown">
                                {item.submenu.map((subItem) => (
                                    <li key={subItem.name} className="dropdown-item">
                                        <button
                                            className={`dropdown-button ${
                                                active === subItem.name ? 'selected' : ''
                                            }`}
                                            onClick={() => handleNavigation(subItem, item)}
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
