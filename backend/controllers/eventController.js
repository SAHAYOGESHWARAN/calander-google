// /backend/controllers/eventController.js
const Event = require('../models/Event');
const emailService = require('../utils/emailService');
const smsService = require('../utils/smsService');

exports.createEvent = async (req, res) => {
    try {
        const { title, description, start, end } = req.body;
        const event = new Event({
            user: req.user.id,
            title,
            description,
            start,
            end,
        });
        await event.save();

        // Send notifications
        await emailService.sendEventNotification(req.user.email, event);
        await smsService.sendEventNotification(req.user.phoneNumber, event);

        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Implement other CRUD operations as needed
