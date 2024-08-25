// /backend/routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Initiate Google OAuth login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect to frontend.
        res.redirect('http://localhost:3000'); // Adjust to your frontend URL
    }
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000'); // Adjust to your frontend URL
});

module.exports = router;
