// Diocese.tsx
import React from "react";
import Section from '../Section';
import Map from "../../../Assets/Images/AboutUs/Map.png"
import Cross from "../../../Assets/Images/AboutUs/cross.png"

const Diocese: React.FC = () => (
    <Section id="diocese" title="Diocese of Southern USA">
        <div className="about-container">
            <div className="about-sec">
                <div className="about-text">
                    <h2>About the Diocese</h2>
                    <img src={Map} alt="Diocese Map" className="inline-image" style={{width:"30%"}} />
                    <p>
                        His Holiness Pope Shenouda III is the 116th Successor of St. Mark the Evangelist. His Holiness'
                        era is marked by a remarkable growth in the number of Coptic churches abroad. To address the
                        needs of these churches, His Holiness felt the urgency to establish dioceses abroad. Thus, the
                        first Coptic Orthodox Diocese to be established in the United States is the Diocese of the
                        Southern United States in 1993. H.H. Pope Shenouda III appointed His Grace Bishop Youssef to
                        oversee this Diocese.
                    </p>

                    <h3>States in the Metropolis</h3>
                    <ul className="about-list">
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Alabama</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Arkansas</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Arizona</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Florida</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Georgia</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Louisiana</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Mississippi</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />New Mexico</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Oklahoma</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Tennessee</li>
                        <li style={{display: "flex"}}><img src={Cross} alt="Coptic Cross" className="cross-icon" />Texas</li>
                    </ul>

                    <p>
                        The Coptic Orthodox Metropolis of the Southern United States is comprised of <strong>97 priests</strong> serving <strong>77 churches</strong> and <strong>36 Coptic communities</strong>.
                    </p>
                    <p>
                        More information about the diocese can be found at <a href="www.suscopts.org" >www.suscopts.org</a>.
                    </p>
                </div>
            </div>
        </div>
    </Section>
);
export default Diocese;
