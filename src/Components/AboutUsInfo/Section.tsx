import React from 'react';
import './Section.css';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="section">
            <h1 className="sec-title">{title}</h1>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;