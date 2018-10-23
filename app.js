const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('me', (req, res) => {
    res.send('meeeeeeeeeee :)')
});

app.listen(3000);

module.exports = app;