import React, { useState } from 'react';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        await fetch('/events/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, date, description })
        });
    };

    return (
        <div>
            <h2>Add Event</h2>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Event Title"
            />
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Event Description"
            />
            <button onClick={handleSubmit}>Add Event</button>
        </div>
    );
};

export default AddEvent;
