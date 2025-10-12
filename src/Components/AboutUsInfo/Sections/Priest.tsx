// Priest.tsx
import React from "react";
import Section from "../Section";
import PriestImg from "../../../Assets/Images/priest.png";

const Priest: React.FC = () => (
    <Section id="priest" title="Clergy at Archangel Michael">
        <div className="about-container">
            <div className="about-sec">
                <div className="about-text">
                    <h2>About Fr. Arseny Aziz</h2>
                    <img src={PriestImg} alt="archangel Michael Church Priest" className="inline-image" style={{width:"30%"}} />
                    <p>
                        Fr. Arseny Aziz was ordained to the priesthood on March 18, 2018, by His Eminence Metropolitan Youssef, in the presence of His Eminence Metropolitan Serapion and His Grace Bishop Seraphim. Originally from Canada, Fr. Arseny grew up with a deep love for Christ and His Church, dedicating himself to service from a young age and continuing that commitment to this day.
                    </p>

                    <p>
                        As the priest of Archangel Michael Coptic Orthodox Church in Phoenix, Arizona, Fr. Arseny focuses on leading worship, serving the community, and sharing the Orthodox faith with all who are open to the Gospel. Guided by God’s will and strengthened by the prayers of the saints, he serves the parish with unwavering zeal and love, as he has since his ordination.
                    </p>

                    <p>
                        We warmly invite you to connect with Fr. Arseny. Whether you have questions, seek spiritual guidance, or wish to visit our church, please feel free to reach out.
                    </p>

                    <h4>Contact Fr. Arseny</h4>
                    <p>Email: <a href="mailto:FrArseny@archangelphx.org">FrArseny@archangelphx.org</a></p>
                </div>
            </div>
        </div>
    </Section>
);

export default Priest;
