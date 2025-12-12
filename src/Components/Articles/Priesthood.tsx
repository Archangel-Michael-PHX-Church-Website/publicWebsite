import React from 'react';
import './AllArticles.css';
import GoToTop from "../Support/GoToTop"; // Global CSS import

const Priesthood = () => {
    return (
        <article className="article">
            <header className="header">
                <h1>Are there Priests in the New Covenant?</h1>
                <p className="author">By Jakob Puckett</p>
            </header>

            <section>
                <p>
                    For Orthodox Christians, priests are an essential part of the Christian life.
                    The priesthood is one of the mysteries – tangible ways God works in the world – and
                    priests are necessary for administering the other mysteries and for our liturgical life.
                </p>
                <p>
                    For those not familiar with Orthodoxy, the presence of priests can be confusing. Where does the Bible talk about priests in the new covenant? Aren’t all Christians priests? These are good questions, and their answers require some background knowledge of priesthood in the Bible.
                </p>
                <p>
                    First, let’s consider what priests do in general. From the beginning of God instituting organized worship, priests had three specific roles: interpreting Scripture, administering forgiveness, and officiating sacrifices (Deut. 17:8–13, Lev. 5:5–10). In the New Testament, this authority still exists and is bestowed upon a certain group.
                </p>
            </section>

            <section>
                <h2>Jesus and the Apostles</h2>
                <p>
                    Jesus gave priestly authority to the apostles. He told them, “Whatever you bind on earth shall be bound in heaven…” (Matt. 16:19, 18:18), a phrase used for authoritative interpretation of Scripture. He also said, “If you forgive the sins of any, they are forgiven…” (John 20:22–23).
                </p>
                <p>
                    Jesus instructed them to “do this in remembrance of me” (Luke 22), referring to the Eucharist. The Greek for “do this” mirrors the Old Testament language for priestly sacrifice, affirming the apostles’ priestly role.
                </p>
                <p>
                    Jesus defended their priestly status by comparing them to priests who work on the sabbath without sin (Matt. 12:1–8).
                </p>
            </section>

            <section>
                <h2>Ministerial vs. General Priesthood</h2>
                <p>
                    All Christians share in a general priesthood (1 Peter 2:9), just as Israel was a “kingdom of priests” (Ex. 19:6). But not all are ministerial priests. Paul outlines strict qualifications for ordained ministry (1 Tim. 3, Titus 1), echoing the Old Testament’s guarded priesthood (Num. 16).
                </p>
                <p>
                    Ministerial priests lead worship and administer sacraments. General believers serve as priests to the world, offering their lives to God and leading creation in worship.
                </p>
            </section>

            <section>
                <h2>Priests in the Early Church</h2>
                <p>
                    The New Testament refers to bishops and priests (often translated “overseers” and “elders”) as leaders of Christian communities. Their duties include teaching doctrine, hearing confessions, and administering forgiveness (Titus 1, 2 Tim. 2, Acts 19:18, James 5:14–16).
                </p>
                <p>
                    Paul calls the apostles “stewards of the mysteries of God” (1 Cor. 4:1), a role passed to bishops and priests through apostolic succession.
                </p>
            </section>

            <section>
                <h2>Conclusion</h2>
                <p>
                    Christ fulfills the law and gives us the priesthood in its fullest sense. He is the high priest, and ordained priests serve under him to minister to the faithful.
                </p>
                <p>
                    This continuity reminds us that Christianity is the fulfillment of the religion revealed to Abraham and Moses—not its replacement.
                </p>
                <p className="author-note">
                    Jakob Puckett is a reader in the Coptic Orthodox Church.
                </p>
            </section>
            <GoToTop/>
        </article>
    );
};

export default Priesthood;