const express = require('express');
const app = express();

//start server

app.set('port', process.env.PORT || 8000);

//start serving static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), () => {
    console.log('Express running ->' + app.get('port'));
});