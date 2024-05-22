const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, HoodScout!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
