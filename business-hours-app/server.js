// server.js

const express = require('express');
const path = require('path');
const workingHoursMiddleware = require('./middleware/workingHours');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Apply working hours middleware to all routes except the closed page
app.use((req, res, next) => {
    if (req.path === '/closed') {
        next();
    } else {
        workingHoursMiddleware(req, res, next);
    }
});

// Routes
app.get('/', (req, res) => {
    res.render('home', { currentPage: 'home' });
});

app.get('/services', (req, res) => {
    res.render('services', { currentPage: 'services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { currentPage: 'contact' });
});

app.get('/closed', (req, res) => {
    const now = new Date();
    res.render('closed', {
        day: now.toLocaleDateString('en-US', { weekday: 'long' }),
        time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Note: The site is only accessible Monday-Friday, 9 AM to 5 PM');
});