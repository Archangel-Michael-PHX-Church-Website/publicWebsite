// Archangel.tsx
import React from "react";
import Section from "../Section";
import Michael from "../../../Assets/Images/SlideShowImages/ArchangelMicheal.jpeg"
const Archangel: React.FC = () => (
    <Section id="archangel" title="On Michael the Archangel">
        <div className="about-container">
            <div className="about-sec">
                <div className="about-text">
                    <h2>Commemoration of the Archangel Michael</h2>
                    <img src={Michael} alt="Archangel Michael " className="inline-image" style={{width:"30%"}} />

                    <p>
                        The Archangel Michael, leader of the heavenly hosts, stands ever before God’s throne,
                        interceding for humanity. His name appears in Holy Scripture in the Book of Daniel, the Epistle
                        of St. Jude, and the Book of Revelation. For instance, Daniel 12:1 declares, “At that time Michael
                        shall stand up, the great prince who stands watch over the sons of your people.”
                    </p>

                    <p>
                        Throughout history, Archangel Michael has strengthened saints and martyrs, empowering them to endure their trials with patience and faith until their struggles were complete. The Coptic Orthodox Church honors him with monthly commemorations on the 12th day of each Coptic month, marked by festivals and alms offered in his name, and a special annual celebration on the 12th of Hathur.
                    </p>

                    <h3>A Miracle of the Archangel Michael</h3>

                    <p>
                        A devout couple, Dorotheus and Theopisti, faithfully celebrated the Archangel Michael’s commemoration each month. When financial hardship left them unable to host their usual feast, they planned to sell their clothes to provide for the celebration. The Archangel Michael appeared to Dorotheus, instructing him not to sell their garments but instead to:
                    </p>

                    <ul>
                        <li>Obtain a sheep worth one-third of a dinar from a shepherd.</li>
                        <li>Acquire a fish worth one-third of a dinar from a fisherman, without cutting it open until instructed.</li>
                        <li>Take as much flour as needed from a merchant.</li>
                    </ul>

                    <p>
                        Dorotheus followed the angel’s guidance and invited the community to the feast, as was their custom. Entering his storeroom, he was astonished to find it filled with wine and abundant provisions, a miraculous blessing. After the celebration, when all had departed, Archangel Michael appeared again, directing Dorotheus to cut open the fish. Inside, he found 300 gold dinars and three coins, each worth one-third of a dinar, designated for the sheep, fish, and flour. The 300 dinars were a gift for Dorotheus, Theopisti, and their children.
                    </p>

                    <blockquote>
                        “I am Michael, who has delivered you from all your trials. I have presented your offerings and alms to God, and you shall lack no good thing in this world.”
                    </blockquote>

                    <p>
                        Overwhelmed, Dorotheus and Theopisti prostrated themselves before him, and he ascended to heaven. This miracle is one of countless wonders attributed to the honored Archangel, who rewarded the couple’s faith both in this life and with the promise of eternal blessings.
                    </p>

                    <p>
                        <strong>May the intercessions of the Archangel Michael be with us always.</strong> We invite you to join us in celebrating his monthly commemoration on the 12th of each Coptic month and his annual feast on the 12th of Hathur.
                    </p>
                </div>
            </div>
        </div>
    </Section>
);

export default Archangel;
