const express = require('express');
const app = express();

//body parser middleware to get params from requests
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

//set port
app.set('port', process.env.PORT || 8000);

//start serving static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/styles/bvc', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        styles: {
            color1: "rgba(131,58,180,1)",
            color2: "rgba(253,29,29,1)",
            color3: "rgba(252,176,69,1)",
            textColor : "black"
        },
        Status: "success"
    });
});

app.listen(app.get('port'), () => {
    console.log('Express running ->' + app.get('port'));
});