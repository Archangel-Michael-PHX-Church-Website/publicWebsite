import Bible from '../../Assets/Images/Calendar/BibleStudy.png'
import Prayer from "../../Assets/Images/Calendar/praying.png"
import Divine from "../../Assets/Images/Calendar/divine.png"
import Education from "../../Assets/Images/Calendar/educations.png"
import Grad from "../../Assets/Images/Calendar/graduate.png"
import Youth from "../../Assets/Images/Calendar/Highschool.png"
import Kids from "../../Assets/Images/Calendar/Kid.png"
import Confess from "../../Assets/Images/Calendar/confession.png"
import Default  from "../../Assets/Images/Calendar/def.png"
import Palm from "../../Assets/Images/Calendar/palm_sunday.png"
import Monday from "../../Assets/Images/Calendar/Holy_Monday.png"
import Tuesday from "../../Assets/Images/Calendar/holy_tuesday.jpeg"
import Wednesday from "../../Assets/Images/Calendar/holy_wednesday.jpeg"
import Thursday from "../../Assets/Images/Calendar/holy_Thursday.jpeg"
import Friday from "../../Assets/Images/Calendar/good_friday.jpeg"
import Saturday from "../../Assets/Images/Calendar/bright_saturday.jpeg"
import Resurrection from "../../Assets/Images/Calendar/resurrection.jpeg"
import Baptism from "../../Assets/Images/Calendar/baptism.jpeg"



export interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    start: string;
    end: string;
    location?: string;
}

export const getEventColorClass = (event: CalendarEvent): string => {
    const title = (event.summary || '').toLowerCase();

    if (title.includes('youth')) return 'event-youth';
    if (title.includes('grads')) return 'event-grads';
    if (title.includes('education')) return 'event-education';
    if (title.includes('bible')) return 'event-bible';
    if (title.includes('kid')) return 'event-kids';
    if (title.includes('confession')) return 'event-confession';
    if (title.includes('palm')) return 'event-palm';
    if (title.includes('monday')) return 'event-monday';
    if (title.includes('tuesday')) return 'event-tuesday';
    if (title.includes('wednesday')) return 'event-wednesday';
    if (title.includes('thursday' )) return 'event-thursday';
    if (title.includes('friday')) return 'event-friday';
    if (title.includes('saturday')) return 'event-saturday'
    if (title.includes('resurrection')) return 'event-resurrection';
    if (title.includes('baptism')) return 'event-baptism';

    if (title.includes('divine liturgy')) return 'event-liturgy';
    if (title.includes('prayer')) return 'event-prayer';

    return 'event-default';
};

// 🖼️ Pick image based on event title
export const getEventImage = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('palm')) return Palm;
    if (lowerTitle.includes('monday')) return Monday;
    if (lowerTitle.includes('tuesday')) return Tuesday;
    if (lowerTitle.includes('wednesday')) return Wednesday;
    if (lowerTitle.includes('thursday' )) return Thursday;
    if (lowerTitle.includes('friday')) return Friday;
    if (lowerTitle.includes('saturday')) return Saturday
    if (lowerTitle.includes('resurrection')) return Resurrection;
    if (lowerTitle.includes('baptism')) return Baptism;
    if (lowerTitle.includes("divine liturgy")) return Divine;
    if (lowerTitle.includes("prayer")) return Prayer;
    if (lowerTitle.includes("youth")) return Youth;
    if (lowerTitle.includes("grads")) return Grad;
    if (lowerTitle.includes("education")) return Education;
    if (lowerTitle.includes("bible")) return Bible;
    if (lowerTitle.includes("kid")) return Kids;
    if (lowerTitle.includes("confession")) return Confess;

    return Default; // fallback
};