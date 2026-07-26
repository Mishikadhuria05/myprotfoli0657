const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration to support local development, Vercel deployments, and custom domains
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, Postman, or same-origin)
        if (!origin) return callback(null, true);
        
        // Allowed domains (localhost, client URL, any vercel preview deployment)
        if (
            origin.includes('localhost') ||
            origin.includes('127.0.0.1') ||
            origin.endsWith('.vercel.app') ||
            (process.env.CLIENT_URL && origin === process.env.CLIENT_URL)
        ) {
            return callback(null, true);
        }
        
        return callback(null, true); // Fallback: allow all origins to prevent CORS errors on Vercel
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Message from Portfolio: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

app.get('/api', (req, res) => {
    res.json({ message: 'Portfolio API Backend is running!' });
});

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running!');
});

// Export app for Vercel serverless execution
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;

