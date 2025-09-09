import React, { useEffect, useState } from 'react';
import { fetchEvents } from "../../Api/EventsApi";
import { EventData } from "./EventsData";
import './EventsCards.css';

const PLACEHOLDER_IMG =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450">
       <rect width="100%" height="100%" fill="#e5e7eb"/>
       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
             font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#6b7280">
         No Image
       </text>
     </svg>`
    );

const formatDate = (d: Date | null) => (d ? d.toLocaleDateString() : 'TBD');

export const EventsCards = () => {
    const [events, setEvents] = useState<EventData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                const data = await fetchEvents();
                if (!cancelled) setEvents(Array.isArray(data) ? data : []);
            } catch (e) {
                console.error(e);
                if (!cancelled) setError('Failed to load events.');
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        load();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            cancelled = true;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // if (loading) return <div className="loading">Loading events...</div>;
    if (!events || events.length === 0) {
        return <p className="no-events"></p>;
    }

    return (
        <div className="container">
            <h1>Upcoming Events</h1>

            <div className="card-grid">
                {events.map((e, idx) => {
                    const key = `${e.eventTitle}-${e.eventStartDate?.toISOString?.() || ''}-${idx}`;
                    const src = e.imageUrl || PLACEHOLDER_IMG;

                    return (
                        <div key={key} className="card">
                            <img
                                src={src}
                                alt={e.eventTitle || 'Event image'}
                                className="card-img"
                                onError={(ev) => {
                                    const img = ev.currentTarget;
                                    if (img.src !== PLACEHOLDER_IMG) img.src = PLACEHOLDER_IMG;
                                }}
                                onClick={() => setSelectedImage(src)}
                            />
                            <div className="card-footer">
                                <div className="footer-info">
                                    <h2 className="card-title">{e.eventTitle || 'Untitled Event'}</h2>
                                    <p><span className="label">Event Start date:</span> {`${formatDate(e.eventStartDate)}`}</p>
                                    <p><span className="label">Event End date:</span> {`${formatDate(e.eventEndDate)}`}</p>
                                    <p><span className="label">Register by:</span> {`${formatDate(e.registrationEndDate)}`}</p>
                                </div>
                                {e.registrationLink && (
                                    <a
                                        href={e.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="register-button"
                                    >
                                        Register
                                    </a>
                                )}
                            </div>


                        </div>
                    );
                })}
            </div>

            {/* ✅ Modal */}
            {selectedImage && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedImage(null)} // close when clicking background
                >
                    <img
                        src={selectedImage}
                        alt="Event"
                        className="modal-img"
                        onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                    />
                </div>
            )}
        </div>
    );
};
