import React, { useRef } from "react";
import "./Services.css";
import { services } from "./ServicesData";

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
        }
    };

    return (
        <div className="carousel-wrapper">
            <button className="arrow left" onClick={() => scroll(-250)}>
                &#10094;
            </button>

            <div className="carousel-container" ref={containerRef}>
                {services.map((item, i) => (
                    <div key={i} className="flip-card">
                        <div className="flip-inner">
                            <div className="flip-front">
                                <img src={item.image} alt={item.text} />
                            </div>

                            <div className="flip-back" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="back-overlay">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="arrow right" onClick={() => scroll(250)}>
                &#10095;
            </button>
        </div>
    );
}