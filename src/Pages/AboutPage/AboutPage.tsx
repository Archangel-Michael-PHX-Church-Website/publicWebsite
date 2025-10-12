import React, { useRef } from "react";
import CopticChurch from "../../Components/AboutUsInfo/Sections/CopticChurch";
import Diocese from "../../Components/AboutUsInfo/Sections/DioceseInfo";
import Priest from "../../Components/AboutUsInfo/Sections/Priest";
import Archangel from "../../Components/AboutUsInfo/Sections/ArchangelInfo";
import Parish from "../../Components/AboutUsInfo/Sections/Parish";
import CircleNav from "../../Components/AboutUsInfo/CircleNav";
import FadeInSection from "../../Components/AboutUsInfo/FadeInSection";

// import './AboutPage.css';


function AboutPage() {
    // null-safe refs
    const churchRef = useRef<HTMLDivElement | null>(null);
    const dioceseRef = useRef<HTMLDivElement | null>(null);
    const parishRef = useRef<HTMLDivElement | null>(null);
    const archangelRef = useRef<HTMLDivElement | null>(null);
    const priestRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (section: string) => {
        const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
            church: churchRef,
            diocese: dioceseRef,
            parish: parishRef,
            archangel: archangelRef,
            priest: priestRef,
        };

        const elementRef = refs[section];
        if (elementRef?.current) {
            elementRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="font-sans">
            <CircleNav scrollToSection={scrollToSection} />

            <FadeInSection id="church">
                <div ref={churchRef}>
                    <CopticChurch />
                </div>
            </FadeInSection>
            <FadeInSection id="diocese">
                <div ref={dioceseRef}>
                    <Diocese />
                </div>
            </FadeInSection>
            <FadeInSection id="parish">
                <div ref={parishRef}>
                    <Parish />
                </div>
            </FadeInSection>
            <FadeInSection id="archangel">
                <div ref={archangelRef}>
                    <Archangel />
                </div>
            </FadeInSection>
            <FadeInSection id="priest">
                <div ref={priestRef}>
                    <Priest />
                </div>
            </FadeInSection>
        </div>
    );
}

export default AboutPage;
