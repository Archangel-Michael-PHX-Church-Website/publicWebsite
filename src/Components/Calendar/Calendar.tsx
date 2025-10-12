import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import {CalendarEvent} from './CalendarEnevtsData'
import {getEventColorClass} from './CalendarEnevtsData'
import {getEventImage} from './CalendarEnevtsData'
import './Calendar.css';
import config from "../../config";


const Calendar: React.FC = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

    useEffect(() => {
        fetch(`${config.API_URL}/calendar/events`)
            .then(res => res.json())
            .then((data: CalendarEvent[]) => {
                const formatted = data.map(event => ({
                    id: event.id,
                    title: event.summary,
                    start: event.start,
                    end: event.end,
                    className: [getEventColorClass(event)],
                    extendedProps: {
                        description: event.description,
                        location: event.location,
                    },
                }));
                setEvents(formatted);
            })
            .catch(err => console.error('Error fetching events:', err));
    }, []);

    const handleEventClick = (info: any) => {
        setSelectedEvent(info.event);
    };

    const closeModal = () => {
        setSelectedEvent(null);
    };

    // 🧹 Clean description
    const cleanDescription = (desc: string): string => {
        if (!desc) return "";
        return desc
            .replace(/_{5,}/g, "")
            .replace(/-{5,}/g, "")
            .replace(/<hr\s*\/?>/gi, "")
            .replace(/(<br\s*\/?>\s*)+/gi, "<br>")
            .trim();
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                events={events}
                eventClick={handleEventClick}
                displayEventTime={false}
            />

            {selectedEvent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-cont" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>✖</button>
                        <div className="modal-bod">
                            {/* Header with background image */}
                            <div
                                className="modal-image"
                                style={{
                                    backgroundImage: `url(${getEventImage(selectedEvent.title)})`,
                                }}
                            >
                                <h2 className="modal-title">{selectedEvent?.title}</h2>
                            </div>

                            <div className="modal-details">
                                <p><span className="label">📅 Start:</span> {selectedEvent?.start ? new Date(selectedEvent.start).toLocaleString() : "N/A"}</p>
                                <p><span className="label">📅 End:</span> {selectedEvent?.end ? new Date(selectedEvent.end).toLocaleString() : "N/A"}</p>

                                {/* Only show location if exists */}
                                {selectedEvent?.extendedProps?.location && (
                                    <p><span className="label">📍 Location:</span> {selectedEvent.extendedProps.location}</p>
                                )}

                                {selectedEvent?.extendedProps?.description && (
                                    <div className="modal-description">
                                        <span className="label">📝 Description:</span>
                                        <div
                                            className="description-content"
                                            dangerouslySetInnerHTML={{
                                                __html: cleanDescription(selectedEvent.extendedProps.description),
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
