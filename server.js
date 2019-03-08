const express = require('express');
const app = express();

//start server
const server = app.listen(8080, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});

//start serving static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});