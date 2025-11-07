import React from 'react';
import Section from '../Section';
import EarlyChurch from '../../../Assets/Images/AboutUs/earlyChurch.jpg'
import StMark from '../../../Assets/Images/AboutUs/StMark.jpeg'
import Church from '../../../Assets/Images/AboutUs/copticChurch.jpg'
import Trinity from '../../../Assets/Images/AboutUs/Trinity.jpg'
import Clement from "../../../Assets/Images/AboutUs/Saint_Clement.png"
import Origen from "../../../Assets/Images/AboutUs/Origen.jpg"
import Mina from "../../../Assets/Images/AboutUs/stMina.jpg"
import Rebecca from "../../../Assets/Images/AboutUs/stRebeaca.jpg"
import Demiana from "../../../Assets/Images/AboutUs/Demiana .jpg"
import Anthony from "../../../Assets/Images/AboutUs/st-anthony.jpg"
import Athanasius from "../../../Assets/Images/AboutUs/stathanasius.jpg"
import Pachomius from "../../../Assets/Images/AboutUs/pachomius.jpg"
import Cyril from "../../../Assets/Images/AboutUs/stCyril.jpg"
import Mary from "../../../Assets/Images/AboutUs/St-Mary-of-Egypt.jpeg"
import Moses from "../../../Assets/Images/AboutUs/StMoses.jpeg"


const CopticChurch: React.FC = () => (

    <Section id="church" title="Coptic Orthodox Church">
        <div className="about-container">
            <div className="about-sec">
                <div className="about-text">
                    <h2>About the Coptic Orthodox Church</h2>
                    <p>
                        The theology of the Coptic Orthodox Church is rooted solely in Holy Scripture, while its doctrines align
                        fully with the traditions of the Early Church.
                        <img src={EarlyChurch} alt="Early Church"  className="inline-image" style={{width:"50%"}}/>
                        These traditions reflect the authentic interpretation and application of the teachings of our
                        Lord Jesus Christ and His Apostles, as understood and practiced by Christians and Church leaders
                        during the period of the One Universal Church, prior to the division in 451 A.D.
                    </p>
                    <blockquote>
                        —Bishop Athanasius of Ben-Swef and Bahnassa (1977)
                    </blockquote>
                </div>
                {/*<div className="about-image">*/}
                {/*    <img src={EarlyChurch} alt="Early Church" />*/}
                {/*</div>*/}
            </div>

            <div className="about-sec">
                <div className="about-text">
                    <h2>History and Foundation</h2>
                    <p>
                        <img src={StMark} alt="St. Mark"  className="inline-image" style={{width:"50%"}}/>
                        Founded in the name of the Lord Jesus Christ by St. Mark the Evangelist in Alexandria around 43
                        A.D., the Coptic Orthodox Church stands as one of the oldest Christian communities in the world.
                        The Church adheres steadfastly to the Nicene Creed, a cornerstone of Christian orthodoxy.
                        St. Athanasius (296–373 A.D.), the twentieth Pope of the Coptic Church, played a pivotal role in
                        defending the divinity of Jesus Christ at the Council of Nicaea in 325 A.D. His unwavering
                        commitment earned him the titles <strong>“Father of Orthodoxy”</strong> and <strong>“St.
                        Athanasius the Apostolic.”</strong>
                    </p>
                </div>
            </div>

            <div className="about-sec">
                <div className="about-text">
                    <h2>Meaning of "Coptic" and "Orthodox"</h2>
                    <p>
                        <img src={Church} alt="Coptic Church" className="inline-image" style={{width:"50%"}}/>
                        The term <em>“Coptic”</em> derives from the Greek word <em>Aigyptos</em>, meaning “Egyptian.”
                        Following the Arab conquest of Egypt in the seventh century, the Arabic term <em>qibt</em> was
                        used to refer to both Egyptians and Christians, reflecting the deep connection between faith and identity.
                        <br/>
                        The term <em>“Orthodox”</em> signifies the Church’s commitment to preserving the “Original Faith,”
                        steadfastly defending the ancient Christian creed against challenges throughout history.
                    </p>
                </div>

            </div>
            <div className="about-sec">
                <div className="about-text">
                    <h2>Core Beliefs</h2>
                    <p>
                        <img src={Trinity} alt="Holy Trinity" className="inline-image" style={{width:"30%"}}/>
                        The Coptic Orthodox Church worships the Holy Trinity—Father, Son, and Holy Spirit—as One God in
                        the unity of divine nature.
                        We confess one God in three co-equal, co-essential, and co-indwelling
                        Persons (Hypostases). Central to our faith is the belief that the Lord Jesus Christ, the
                        Only-Begotten Son, one in essence with the Father, is the sole Savior of humanity.
                        <br/>
                        As Miaphysites, we affirm the One composite Nature of Christ, fully divine and fully human,
                        without mingling, without confusion, without alteration. The Coptic Church upholds the One
                        Incarnate Nature of the Logos, a doctrine carefully preserved through centuries of worship and
                        teaching.
                    </p>
                </div>

            </div>

            <div className="about-sec">
                <div className="about-text">
                    <h2>Continuity and Tradition</h2>
                    <p>
                        The Coptic Orthodox Church has remained remarkably consistent in its rituals and doctrines. The
                        unbroken succession of its Patriarchs, Bishops, priests, and deacons underscores its enduring
                        commitment to the apostolic faith, making it a living witness to the teachings of the Early Church.
                    </p>
                    <p>Some Famous Copts throughout the centuries, to name a few…</p>
                    <h3>Early Christianity (Ante-Nicene, before 325 AD)</h3>
                    <p>
                        This period encompasses the foundational years of Christianity in Egypt, marked by evangelism,
                        theological synthesis with philosophy, and early martyrdom.
                    </p>
                    <ul className="about-list">
                        <div className="about-row">
                            <li>
                                <strong>Clement of Alexandria</strong> (c. 150–215 A.D.)
                                <p>
                                    Head of the Catechetical School of Alexandria, a philosopher-theologian who integrated
                                    Greek thought with Christian doctrine in works like <em>Stromata</em>, influencing early
                                    Coptic intellectual tradition.
                                    <img src={Clement} alt="St. Clement of Alexandria" className="inline-image" />
                                </p>
                            </li>
                            <li>
                                <strong>Origen</strong> (c. 185–253 A.D.)
                                <p>
                                    Prolific scholar and theologian from Alexandria, known for biblical exegesis, asceticism,
                                    and works like <em>On First Principles</em>. Despite later controversies, his teachings
                                    shaped Coptic theology and the Catechetical School.
                                    <img src={Origen} alt="Origen" className="inline-image" />
                                </p>
                            </li>
                        </div>
                        <div className="about-row">
                            <li>
                                <strong>St. Mina the Wonderworker</strong> (c. 285–309 A.D.)
                                <p>
                                    A revered martyr under Emperor Diocletian, known for miracles; his shrine near Alexandria
                                    became a major pilgrimage site, reflecting early Coptic devotion.
                                    <img src={Mina} alt="St. Mina the Wonderworker" className="inline-image" />
                                </p>
                            </li>
                            <li>
                                <strong>St. Demiana </strong>(c. 304)
                                <p>
                                    <strong>Significance:</strong> A martyr and founder of early Coptic monasticism for women,
                                    St. Demiana was a noblewoman who established a community of virgins in the Delta region
                                    of Egypt. She and her companions were martyred under Emperor Diocletian for their faith.
                                    Her monastery became a model for female her story in the Coptic
                                    Synaxarion inspires devotion.
                                    asceticism, and <img src={Demiana} alt="St. Demiana" className="inline-image" />
                                </p>
                            </li>
                            <li>
                                <strong>St. Rebecca and Her Five Children </strong>(c. 305)
                                <p>
                                    <strong>Significance:</strong> A martyr whose unwavering faith led to her and her five
                                    children’s martyrdom during the Diocletian persecution (c. 304–313 A.D.). Her courage in
                                    the face of persecution, as Coptic Synaxarion, exemplifies maternal
                                    strength and devotion to Christ, making her a beloved recorded in the figure in Coptic
                                    five children spirituality. Her were martyred in front of her.
                                    <img src={Rebecca} alt="St. Rebecca and Her Five Children" className="inline-image" />
                                </p>
                            </li>
                        </div>
                    </ul>

                    <h3>Nicene, Post-Nicene (325–451 A.D.)</h3>
                    <p>
                        Following the Council of Nicaea, this era focused Christology, developing on defending orthodox
                        monasticism, and theological refinement amid heresies.
                    </p>

                    <ul className="about-list">
                        <div className="about-row">
                            <li>
                                <strong>St. Anthony the Great </strong>(c. 251–356 A.D.)
                                <p>"The Father of Monasticism", who pioneered desert asceticism; his life, documented by
                                    St. Athanasius, inspired Coptic and global monastic movements.
                                    <img src={Anthony} alt="St. Anthony the Great" className="inline-image" />
                                </p>
                            </li>
                            <li>
                                <strong>St. Athanasius the Apostolic </strong>(c. 296–373 A.D.)
                                <p>
                                    The 20th Pope of Alexandria, defender of Christ's divinity at the Council of Nicaea
                                    (325 A.D.), and author of <em>On the Incarnation</em>; known as the "Father of
                                    Orthodoxy."
                                    <img src={Athanasius} alt="St. Athanasius the Apostolic" className="inline-image" />

                                </p>
                            </li>
                            <li>
                                <strong>St. Pachomius the Great </strong>(c. 292–346 A.D.)
                                <p>
                                    Founder of cenobitic (communal) monasticism in Upper Egypt, establishing rules that
                                    structured Coptic monastic life.
                                    <img src={Pachomius} alt="St. Pachomius the Great" className="inline-image" />
                                </p>
                            </li>
                        </div>
                        <div className="about-row">
                            <li>
                                <strong>St. Moses the Strong </strong>(c. 330–405 A.D.)
                                <p>
                                    A former robber turned desert father, known for repentance, humility, and martyrdom;
                                    his story exemplifies transformative Coptic spirituality.
                                    <img src={Moses} alt="St. Moses the Strong" className="inline-image" />

                                </p>
                            </li>
                            <li>
                                <strong>St. Cyril of Alexandria, the Pillar of Faith</strong> (c. 376–444 A.D)
                                <p>
                                    The 24th Pope of Alexandria, who defended the Miaphysite doctrine at the Council of
                                    Ephesus (431 A.D.), emphasizing Christ's united divine-human nature.
                                    <img src={Cyril} alt="St. Cyril of Alexandria" className="inline-image" />
                                </p>
                            </li>
                            <li>
                                <strong>St. Mary of Egypt</strong> (c. 344–421 A.D.)
                                <p>
                                    <strong>Significance:</strong> A desert ascetic and repentant sinner of extreme
                                    penance in the Egyptian who lived a life desert. Her story, recorded by St. Zosimas
                                    and venerated in Coptic tradition, showcases transformative repentance and ascetic
                                    spirituality. Though shared with other Orthodox traditions, her Egyptian connection
                                    ties her to Coptic heritage.
                                    <img src={Mary} alt="St. Mary of Egypt" className="inline-image" />
                                </p>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

export default CopticChurch;