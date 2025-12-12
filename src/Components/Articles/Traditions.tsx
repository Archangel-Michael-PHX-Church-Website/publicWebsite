import React from 'react';
import './AllArticles.css';
import GoToTop from "../Support/GoToTop"; // Global CSS import

const Traditions = () => {
    return (
        <article className="article">
            <header className="header">
                <h1>What Orthodox Christians Mean by Tradition</h1>
                <p className="author">By Jakob Puckett</p>
            </header>

            <section>
                <p>
                    It is no secret that Orthodox Christians hold church “Tradition” in high regard. We see Tradition working together with Scripture to help shape our beliefs and practices.
                </p>
                <p>
                    For those not used to esteeming Tradition, this can be confusing. What is this Tradition and where is it found? And doesn’t Scripture warn us against following tradition?
                </p>
                <p>
                    When we look at the Bible, we see that Scripture differentiates between good Tradition and bad tradition. And not only does Scripture function alongside Tradition, it requires us to follow it.
                </p>
            </section>

            <section>
                <h2>What Is Tradition?</h2>
                <p>
                    Simply put, Tradition is the life of the church, beginning with the apostles and continuing until now. We don’t pit Scripture against Tradition, as Tradition is the life of the very Church which produced Scripture. In this sense, even Scripture itself can be seen as part of Tradition.
                </p>
                <p>
                    Tradition helps us understand and apply Scripture, but it is not a separate source of revelation like Scripture. All our doctrines and practices are at least implicit in Scripture, but not everything is explicit – some parts are hard to understand and vague as to application.
                </p>
                <p>
                    For example, Jesus instructed certain conduct for when we fast (Matthew 6:16-18), but did not say when or how to fast. For Orthodox Christians, these fasting times and methods are known through participating in the life of the church. Similarly, Paul tells us to pray without ceasing (1 Thessalonians 5:17), and the church provides many hourly prayers as well as prayers that can be said (and lived) endlessly.
                </p>
            </section>

            <section>
                <h2>Scripture and Tradition Together</h2>
                <p>
                    A clear example of this cooperation is found in Paul’s letter to Timothy. Before reminding Timothy that Scripture is “God-breathed,” Paul tells him to follow “the things which you have learned and been assured of, knowing from whom you have learned them” (2 Timothy 3:13-16).
                </p>
                <p>
                    Jesus Christ established a church – a community – and gave his apostles authority in it. Scripture says Jesus is the cornerstone and the apostles the foundation of the church (Eph. 2:20, Rev. 21:14, 1 Tim. 3:15). The apostles passed their authority to their successors, the bishops.
                </p>
                <p>
                    Paul commends the Corinthians for “keeping the traditions” (1 Cor. 11:2), and commands the Thessalonians to “stand fast and hold to the traditions” whether written or unwritten (2 Thess. 2:15, 3:6). He tells Timothy to pass on his teachings to others (2 Tim. 2:2).
                </p>
            </section>

            <section>
                <h2>What About Bad Traditions?</h2>
                <p>
                    Scripture is not anti-Tradition. When certain traditions are condemned, it’s because they contradict Scripture. Paul condemns pagan traditions that lead away from Christ (Col. 2:8), and Jesus rebukes Pharisaic traditions that avoid God’s commands (Mark 7:1-23).
                </p>
                <p>
                    Yet Jesus affirms other traditions. He tells his disciples to submit to the Pharisees’ authority because “they sit in Moses’ seat” (Matt. 23:1-3), a practice not found in the Old Testament. He celebrates Hanukkah (John 10:22-23) and uses wine at Passover, a tradition not mentioned in Exodus.
                </p>
                <p>
                    The apostles also accept extra-Biblical traditions. Stephen and Paul say the law was given through angels (Acts 7:53, Gal. 3:19, Heb. 2:2-3), a tradition used to highlight the superiority of the new covenant.
                </p>
            </section>

            <section>
                <h2>Where We Find Tradition Today</h2>
                <p>
                    Tradition lives in what the church, governed by apostolic successors, considers authoritative. This includes liturgies, creeds, councils, and sacred imagery — all guides for understanding and applying Scripture.
                </p>
                <p>
                    Ultimately, Tradition helps us better live our faith. Nobody is a Christian alone, and through Tradition we participate in the continuous life of the church that Jesus Christ established from the beginning.
                </p>
                <p className="author-note">
                    Jakob Puckett is a reader in the Coptic Orthodox Church.
                </p>
            </section>
            <GoToTop/>
        </article>
    );
};

export default Traditions;