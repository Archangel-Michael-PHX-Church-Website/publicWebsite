import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css";

export default function GoToTop() {
    const [visible, setVisible] = useState(false);
    const [offset, setOffset] = useState(25); // distance from bottom

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 300);

            const footer = document.querySelector("footer");
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();

            if (footerRect.top < window.innerHeight) {
                // footer is visible → move icon up
                setOffset(footerRect.height + 30);
            } else {
                // footer not visible → reset
                setOffset(25);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        visible && (
            <div className="go-top-icon" style={{ bottom: offset }} onClick={scrollToTop}>
                <FaArrowUp size={22} />
            </div>
        )
    );
}
