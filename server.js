const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable trust proxy so you get the visitor's true IP, not the hosting provider's IP
app.set('trust proxy', true);

app.get('/', (req, res) => {
    // Read the IP address from the request object
    const visitorIp = req.ip || req.headers['x-forwarded-for'];
    
    // Log it to your server console
    console.log(`New visitor IP logged: ${visitorIp}`);
    
    // Send a response back to the visitor
    res.send(`<h1>Hello! Your IP address is: ${visitorIp}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
