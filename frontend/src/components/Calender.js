// /frontend/src/components/Calendar.js
import React, { useEffect, useState } from 'react';
import { createEvent } from '../services/api';

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from backend
        // Implement fetching logic
    }, []);

    const handleAddEvent = async () => {
        const eventData = {
            title: 'Sample Event',
            description: 'This is a sample event',
            start: new Date(),
            end: new Date(),
        };
        try {
            const response = await createEvent(eventData);
            setEvents([...events, response.data]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Your Calendar</h2>
            <button onClick={handleAddEvent}>Add Event</button>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;
