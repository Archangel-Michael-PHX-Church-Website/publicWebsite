import React from "react";
import "./CircleNav.css";
import {Circles} from './CircleData'

interface Props {
    scrollToSection: (section: string) => void;
}

const CircleNav: React.FC<Props> = ({ scrollToSection }) => {

    return (
        <div className="circles-row">
            {Circles.map((circle) => (
                <button
                    key={circle.label}
                    className="circle"
                    type="button"
                    onClick={() => scrollToSection(circle.target)}
                >
                    <span className="circle-text">{circle.label}</span>
                </button>
            ))}
        </div>
    );
};

export default CircleNav;
