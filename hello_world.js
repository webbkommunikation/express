// Import the Express module
const express = require('express');
const app = express();

// GET route: Home route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// GET route: About route
app.get('/about', (req, res) => {
    res.json({ page: 'About', description: 'This is the About page.' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
