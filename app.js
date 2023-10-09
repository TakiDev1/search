const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Store IP addresses in an array
const ipAddresses = [];

// Middleware to log the client's IP address
app.use((req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress;
    if (!ipAddresses.includes(clientIp)) {
        ipAddresses.push(clientIp);
    }
    next();
});

// Serve your HTML, CSS, and JS files
app.use(express.static('admin'));

// Route to get the logged IP addresses
app.get('/get-ips', (req, res) => {
    res.json(ipAddresses);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
