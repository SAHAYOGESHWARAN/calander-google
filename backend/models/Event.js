
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    description: String,
    start: Date,
    end: Date,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);
