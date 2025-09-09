import {EventData, RawEventData} from "./EventsData";

const toStringOrNull = (v: any): string | null => {
    if (v === null || v === undefined) return null;
    const s = String(v).trim();
    return s.length ? s : null;
};

const toDateOrNull = (v: any): Date | null => {
    const s = toStringOrNull(v);
    if (!s) return null;
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
};

export const normalizeEvents = (raw: unknown): EventData[] => {
    if (!Array.isArray(raw)) return [];

    return (raw as RawEventData[]).map((r) => {
        const title = toStringOrNull(r?.eventTitle) ?? 'Untitled Event';

        return {
            imageUrl: toStringOrNull(r?.imageUrl),
            eventTitle: title,
            registrationLink: toStringOrNull(r?.registrationLink),
            eventStartDate: toDateOrNull(r?.eventStartDate),
            eventEndDate: toDateOrNull(r?.eventEndDate),
            registrationEndDate: toDateOrNull(r?.registrationEndDate),
        };
    });
};
