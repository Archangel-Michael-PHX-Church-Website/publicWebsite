import Eucharist from "../../Assets/Images/Articles/Eucharist.jpg"
import Icons from "../../Assets/Images/Articles/Icons.jpg"
import Intercession from "../../Assets/Images/Articles/Saints.jpg"
import Priest from "../../Assets/Images/Articles/priesthood.jpg"
import Sacraments from "../../Assets/Images/Articles/Sacraments.png";
import Traditions from "../../Assets/Images/Articles/apostles.png";

const articles = [
    {
        title: "Is the Eucharist Really the Body and Blood of Jesus?",
        description:
            "There is nothing more important in the Orthodox Christian life than receiving the Eucharist.\n" +
            " Each part of our liturgy and all other mysteries point to it, and we take it as often as we can.",
        image: Eucharist,
        link: "/Eucharist",
    },
    {
        title: "A Biblical Defense of Icons",
        description:
            "The use and veneration of icons is an unmistakable part of Orthodox Christianity. \n" +
            "Sacred images – as “icon” simply means “image” – have a place in our worship because, \n" +
            "as God told Moses on the mountain, earthly worship is to reflect heavenly worship \n" +
            "(Exodus 25:9, Acts 7:44, Hebrews 8:5). Icons depict people and beings serving before God’s heavenly throne.",
        image: Icons,
        link: "/Icons",
    },
    {
        title: "Is the Intercession of the Saints Biblical?",
        description:
            "But first, we need to set our expectations of what we would anticipate finding in the Bible regarding\n" +
            " the intercession of the saints. First, the Bible does not say much about prayers to the saints because, \n" +
            "due to Christ’s sacrifice not yet occurring, most of them were not yet in heaven, in the presence of God.",
        image: Intercession,
        link: "/Intercession",
    },
    {
        title: "Are there Priests in the New Covenant?",
        description:
            "For Orthodox Christians, priests are an essential part of the Christian life. \n" +
            "The priesthood is one of the mysteries – tangible ways God works in the world – and \n" +
            "priests are necessary for administering the other mysteries and for our liturgical life.",
        image: Priest,
        link: "/Priesthood",
    },
    {
        title: "Are the Sacraments Biblical?",
        description:
            "Orthodox Christians live their lives observing the sacraments, or more commonly called in Orthodoxy, " +
            "the mysteries of the church. Since God acts through them, our participation in the mysteries is participation " +
            "in the life that God has established for us.",
        image: Sacraments,
        link: "/Sacraments",
    },
    {
        title: "What Orthodox Christians Mean by Tradition",
        description:
            "It is no secret that Orthodox Christians hold church “Tradition” in high regard. We see Tradition working " +
            "together with Scripture to help shape our beliefs and practices.\n",
        image: Traditions,
        link: "/Traditions",
    },
];

export default articles;