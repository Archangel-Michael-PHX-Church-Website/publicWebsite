import {EventData} from "../Components/Events/EventsData";
import {normalizeEvents} from "../Components/Events/NormalizeEvents";
import config from "../config";

export const fetchEvents = async (): Promise<EventData[]> => {
    const url =`${config.API_URL}/events`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
        throw new Error(`Failed to fetch events (HTTP ${res.status})`);
    }
    const json = await res.json();
    return normalizeEvents(json);
};
