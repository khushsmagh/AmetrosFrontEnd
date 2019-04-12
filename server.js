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
        name : "Bow Valley College",
        description : "Welcome to our page.",
        logoUrl: "https://geology.com/google-earth/google-earth.jpg",
        styles: {
            color1: "white",
            color2: "rgba(131,111,180,1)",
            color3: "rgba(253,29,29,1)",
            color4: "rgba(252,176,69,1)",
            color5: "rgba(244,244,244,1)",
            color6: "rgba(255,255,255,1)"
        },
        Status: "success"
    });
});

app.get('/sims', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ 
        sims: [{
                simID: 1,
                simName: "Soft Software Simulations",
                simPhotoURL: "https://geology.com/google-earth/google-earth.jpg",
                simPrice: 300,
                simStartDate: "2019-01-12",
                simEndDate: "2020-01-12",
                simLimitSeats: 30
            },
            {
                simID: 2,
                simName: "Math Simulations",
                simPhotoURL: "http://shs.ssd6.org/files/2016/08/Wordle-Math.png",
                simPrice: 400,
                simStartDate: "2019-03-22",
                simEndDate: "2020-03-22",
                simLimitSeats: 35
            },
            {
                simID: 3,
                simName: "Science Simulations",
                simPhotoURL: "https://risnews.com/_flysystem/s3/styles/content_sm/s3/2018-11/AI-20171012113039221.jpg?itok=oPpT7_5r",
                simPrice: 450,
                simStartDate: "2019-04-12",
                simEndDate: "2020-04-12",
                simLimitSeats: 40
            }
        ],
        Status : "Success"
    });
});

app.post('/partner', (req, res) => {

    let partnerName = req.body.name;
    let partnerDescription = req.body.description;
    let partnerUrl = req.body.url;
    let partnerLogo = req.body.logo;
    let textColor = req.body.styles.textColor;
    let color1 = req.body.styles.color1;
    let color2 = req.body.styles.color2;
    let color3 = req.body.styles.color3;

    console.log(partnerName);
    console.log(partnerDescription);
    console.log(partnerUrl);
    console.log(partnerLogo);
    console.log(textColor);
    console.log(color1);
    console.log(color2);
    console.log(color3);
    res.status(200).json({
        Status: "success"
    });
});

app.listen(app.get('port'), () => {
    console.log('Express running ->' + app.get('port'));
});