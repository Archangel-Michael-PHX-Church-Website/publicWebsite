// Parish.tsx
import React from "react";
import Section from "../Section";
import Church from "../../../Assets/Images/SlideShowImages/church-outdoor.jpeg"

const Parish: React.FC = () => (
    <Section id="parish" title="Archangel Michael Parish">
        <div className="about-container">
            <div className="about-sec">
                <div className="about-text">
                    <h2>About Our Church</h2>
                    <img src={Church} alt="archangel Michael Church" className="inline-image" style={{width:"30%"}} />
                    <p>
                        Located in Phoenix, Arizona, our American Coptic Orthodox Church is dedicated to serving our community and
                        those in need, reflecting God’s love through faith and action. Since our first liturgy on February 4, 2017,
                        we have embraced the living tradition of the Orthodox Church of Alexandria, guided by a mission to:
                    </p>

                    <ul className="about-list">
                        <div className="about-row">
                            <li>
                                <strong>Learn the Gospel:</strong> Deepen our understanding of the Gospel through catechesis, adult education, and spiritual formation, rooted in the teachings of our Lord Jesus Christ.
                            </li>
                            <li>
                                <strong>Live the Gospel:</strong> Pursue a life of sanctification through the power of the Holy Spirit, bearing witness to the truth of the Gospel and bringing hope to a faithless generation.
                            </li>
                            <li>
                                <strong>Preach the Gospel:</strong> Proclaim the Good News to our local community through outreach, community service, and worship in the English language, fulfilling Christ’s command to “make disciples of all nations” (<em>Matthew 28:19</em>).
                            </li>
                        </div>
                    </ul>

                    <p>
                        We invite you to join us in worship, service, and fellowship as we strive to live out the timeless faith of the Coptic Orthodox Church in Phoenix and beyond.
                    </p>
                </div>
            </div>
        </div>
    </Section>
);

export default Parish;
