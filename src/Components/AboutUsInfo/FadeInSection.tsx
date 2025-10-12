import React, { useEffect, useRef, useState } from "react";
import "./Section.css";

interface FadeInSectionProps {
    id: string;
    children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ id, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div
            ref={ref}
            id={id}
            className={`fade-section ${isVisible ? "visible" : ""}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
