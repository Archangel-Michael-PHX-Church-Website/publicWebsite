import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./SlideShow.css";

interface SlideshowProps {
    images: string[];
    interval?: number; // milliseconds
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval, isHovered]);

    const goToPrev = () => {
        setDirection("left");
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div
            className="slideshow-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="slide-image"
                    custom={direction}
                    initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </AnimatePresence>

            <button className="arrow-button left" onClick={goToPrev}>
                <FiChevronLeft size={32} />
            </button>
            <button className="arrow-button right" onClick={goToNext}>
                <FiChevronRight size={32} />
            </button>
        </div>
    );
};

export default Slideshow;
