const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

exports.sendEventNotification = (recipientEmail, event) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: recipientEmail,
        subject: `New Event: ${event.title}`,
        text: `You have a new event scheduled on ${event.date}.\n\nDescription: ${event.description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};
