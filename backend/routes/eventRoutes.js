// /backend/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { ensureAuthenticated } = require('../middleware/authMiddleware');

// Create an event
router.post('/', ensureAuthenticated, eventController.createEvent);

// Implement other routes (GET, PUT, DELETE) as needed

module.exports = router;
