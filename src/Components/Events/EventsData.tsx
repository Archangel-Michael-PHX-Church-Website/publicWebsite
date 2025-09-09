// Raw data as returned from backend (could have missing/wrong fields)
export interface RawEventData {
    imageUrl?: unknown;
    eventTitle?: unknown;
    registrationLink?: unknown;
    eventStartDate?: unknown;
    eventEndDate?: unknown;
    registrationEndDate?: unknown;
}

// Normalized type used in the UI
export interface EventData {
    imageUrl: string | null;
    eventTitle: string;
    registrationLink: string | null;
    eventStartDate: Date | null;
    eventEndDate: Date | null;
    registrationEndDate: Date | null;
}
