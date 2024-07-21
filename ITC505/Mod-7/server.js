const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.static('public'));  // Serve static files from 'public' directory

// Root route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');  // Make sure the path is correct
});

// Other routes...
app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/set-user', (req, res) => {
    res.cookie('name', 'Varshini', { httpOnly: true });
    res.cookie('email', 'varshini@example.com', { httpOnly: true });
    res.send('User data cookies set');
});

app.get('/get-user', (req, res) => {
    let username = req.cookies['name'];
    if (username) {
        res.send(`User Name: ${username}, User Email: ${req.cookies['email']}`);
    } else {
        res.send('No cookie found');
    }
});

// Catch-all for undefined routes
app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
