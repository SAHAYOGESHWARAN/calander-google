const twilio = require('twilio');
const keys = require('../config/keys');

const client = new twilio(keys.smsServiceAPI, 'your_twilio_auth_token');

exports.sendEventNotification = (recipientPhone, event) => {
    client.messages.create({
        body: `New Event: ${event.title} on ${event.date}. Description: ${event.description}`,
        to: recipientPhone,
        from: 'your_twilio_phone_number'
    })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
};
