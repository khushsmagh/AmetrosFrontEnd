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
                simPhotoURL: "",
                simPrice: 300,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 30
            },
            {
                simID: 2,
                simName: "Math Simulations",
                simPhotoURL: "",
                simPrice: 400,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 35
            },
            {
                simID: 3,
                simName: "Science Simulations",
                simPhotoURL: "",
                simPrice: 450,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 40
            }
        ],
        Status : "Success"
    });
});

app.post('/partner', (req, res) => {

    console.log(req.body);
    res.status(200).json({
        Status: "success"
    });
});

//Authentication for Login

app.post('/users/login',(req, res) => {
    var status = false;
    let users =  [{
            email: "test@gmail.com",
            password: "T@1234"
        },
        {
            email: "bvc@gmail.com",
            password: "T@1234",  
        },
        {
            email: "sandeep@gmail.com",
            password: "T@1234",
        },
        {
            email: "saad@gmail.com",
            password: "T@1234"
        },
        {
            email: "pablo@gmail.com",
            password: "T@1234"
        }      
    ]

    for(var i = 0 ; i < users.length; i++){
        let userEmail = users[i].email;
        let userPassword = users[i].password;
        console.log("Email" + " --" + userEmail);
        console.log("Password", " --- " + userPassword);
        if(req.body.email === userEmail && req.body.password === userPassword)
        {
            status = true;
            break;
        }
    }
    if(status) {
        console.log(status);
        res.status(200).json({
        Status: "success"
    });
    }
    else{
        res.status(200).json({
            Status: "failure"
        }); 
    }
    console.log(req.body);
});

app.listen(app.get('port'), () => {
    console.log('Express running ->' + app.get('port'));
});

