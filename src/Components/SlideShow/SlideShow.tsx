import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SlideShow.css";

interface SlideshowBackgroundProps {
    images: string[];
    interval?: number; // milliseconds
}

const Slideshow: React.FC<SlideshowBackgroundProps> = ({
                                                                     images,
                                                                     interval = 5000,
                                                                 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToNext = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="background-slideshow">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="background slide"
                    className="background-slide"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
            </AnimatePresence>

            {/* Example overlay content */}
            <div className="overlay-content">
                <h1>Archangel Michael American Coptic Orthodox Church</h1>
                <h2>ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲛ̀ⲣⲉⲙⲛ̀ⲭⲏⲙⲓ ⲛ̀ⲧⲉ ⲡⲓⲁ̀ⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲙⲓⲭⲁⲏⲗ</h2>
            </div>
        </div>
    );
};

export default Slideshow;
