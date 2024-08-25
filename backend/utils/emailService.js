// /backend/utils/emailService.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // e.g., 'Gmail'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendEventNotification = async (to, event) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: `New Event Added: ${event.title}`,
        text: `You have a new event added:\n\nTitle: ${event.title}\nDescription: ${event.description}\nStart: ${event.start}\nEnd: ${event.end}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent');
    } catch (err) {
        console.error('Error sending email:', err);
    }
};
