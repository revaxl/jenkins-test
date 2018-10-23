const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('me', (req, res) => {
    res.send('hello again')
});

app.listen(3000);