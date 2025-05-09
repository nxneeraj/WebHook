const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Received POST request:');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    // Send a response back to the client
    res.status(200).send('Request received and logged');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
