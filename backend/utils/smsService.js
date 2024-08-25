// /backend/utils/smsService.js
const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendEventNotification = async (to, event) => {
    try {
        await client.messages.create({
            body: `New Event Added: ${event.title}\nDescription: ${event.description}\nStart: ${event.start}\nEnd: ${event.end}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to, // E.g., '+1234567890'
        });
        console.log('SMS sent');
    } catch (err) {
        console.error('Error sending SMS:', err);
    }
};
