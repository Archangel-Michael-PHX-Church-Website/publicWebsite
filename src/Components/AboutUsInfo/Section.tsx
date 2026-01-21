import React from 'react';
import './Section.css';
import GoToTop from "../Support/GoToTop";
import ScrollToTop from "../Support/ScrollToTop";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <>
        <ScrollToTop />
        <section id={id} className="section">
            <h1 className="sec-title">{title}</h1>
            <div className="section-content">
                {children}
            </div>
            <GoToTop/>
        </section>
        </>
    );
};

export default Section;