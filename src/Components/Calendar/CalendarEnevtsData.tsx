import Bible from '../../Assets/Images/BibleStudy.png'
import Prayer from "../../Assets/Images/pray.jpg"
import Divine from "../../Assets/Images/divine.jpeg"
import Education from "../../Assets/Images/education.jpeg"
import Grad from "../../Assets/Images/grad.jpeg"
import Youth from "../../Assets/Images/youth.jpg"
import Kids from "../../Assets/Images/Kids.jpg"
import Confess from "../../Assets/Images/confess.jpeg"
import Default  from "../../Assets/Images/default.jpg"

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

    if (title.includes('divine liturgy')) return 'event-liturgy';
    if (title.includes('prayer')) return 'event-prayer';
    if (title.includes('youth')) return 'event-youth';
    if (title.includes('grads')) return 'event-grads';
    if (title.includes('education')) return 'event-education';
    if (title.includes('bible')) return 'event-bible';
    if (title.includes('kid')) return 'event-kids';
    if (title.includes('confession')) return 'event-confession';
    return 'event-default';
};

// 🖼️ Pick image based on event title
export const getEventImage = (title: string): string => {
    const lowerTitle = title.toLowerCase();

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