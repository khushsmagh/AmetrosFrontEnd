const express = require('express');
const app = express();
const db = require('./config').db;

//body parser middleware to get params from requests
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
})); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

//set port
app.set('port', process.env.PORT || 8000);

//start serving static files
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


/**
 * api to get partner information with styles
 * */
app.get('/partner/:url', (req, res) => {
    const url = req.params.url;
    db.collection('Partners').where("Url", "==", url).get()
        .then((snapshot) => {
            let data = snapshot.docs.map((doc) => {
                return doc.data();
            });
            if (data.length > 0) {
                res.status(200).json({
                    ...data[0],
                    Status: "Success"
                });
            } else {
                res.status(400).json({
                    Guidance: "No data found",
                    Status: "Failure"
                });
            }
        }).catch((error) => {
            console.error(error);
            res.status(400).json({
                Status: "Failure"
            });
        });
});


/**
 * api to get partner simulation
 */
app.get('/sims/:partnerUrl', (req, res) => {
    const partnerUrl = req.params.partnerUrl;
    db.collection('Simulations').where("partnerUrl", "==", partnerUrl).get()
        .then((snapshot) => {
            let data = snapshot.docs.map((doc) => {
                return doc.data();
            });
            if (data.length > 0) {
                res.status(200).json({
                    sims: data,
                    status: "Success"
                })
            } else {
                res.status(400).json({
                    Guidance: "No data found",
                    Status: "Failure"
                });
            }
        })
        .catch(() => {
            res.status(400).json({
                Guidance: "No data found",
                Status: "Failure"
            });
        });
});

/**
 * Post API to update partner information and style information.
 */
app.post('/partner/:partnerUrl', (req, res) => {
    const partnerInfo = req.body;
    const partnerUrl = req.params.partnerUrl;

    //get id of the document
    db.collection('Partners').where("Url", "==", partnerUrl).get()
        .then(snapshot => {
            let data = snapshot.docs.filter((doc) => (doc.data().Url == partnerUrl));
            if (data.length > 0) {
                let docId = data[0].id;

                //check url is already used
                db.collection('Partners').where("Url", "==", partnerInfo.url).get()
                    .then(aSnapshot => {
                        //update partner info if url is unique
                        if (aSnapshot.docs.length == 0) {
                            
                            let batch = db.batch();
                            let docRef = db.collection("Partners").doc(docId);

                            //update info in partner doc ref
                            batch.update(docRef, {
                                Name: partnerInfo.name,
                                Description: partnerInfo.description,
                                Url: partnerInfo.url,
                                LogoUrl: partnerInfo.logo,
                                Color1: partnerInfo.styles.color1,
                                Color2: partnerInfo.styles.color2,
                                Color3: partnerInfo.styles.color3,
                                Color4: partnerInfo.styles.color4,
                                Color5: partnerInfo.styles.color5,
                                Color6: partnerInfo.styles.color6
                            });

                            //update all the simulation partnerurl atomic
                            db.collection('Simulations').where("partnerUrl", "==", partnerUrl).get()
                                .then((aSnap) => {
                                    let data = aSnap.docs;
                                    data.forEach(sim  => {
                                        let simRef = db.collection("Simulations").doc(sim.id);
                                        batch.update(simRef, { partnerUrl: partnerInfo.url});
                                    });
                                    batch.commit().then(() => {
                                            res.status(400).json({
                                                Guidance: "Information has been updated.",
                                                Status: "Success"
                                            });
                                        }).catch(() => {
                                            res.status(400).json({
                                                Guidance: "Error while updating content. Please try again later.",
                                                Status: "Failure"
                                            });
                                        });
                                })

                        } else {
                            res.status(400).json({
                                Guidance: "URL not unique. Please provide different url to update.",
                                Status: "Failure"
                            });
                        }
                    })
                    .catch();
            } else {
                res.status(400).json({
                    Guidance: "Wrong Url Provided to update.",
                    Status: "Failure"
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({
                Guidance: "Wrong Url Provided to update.",
                Status: "Failure"
            });
        });
});


app.listen(app.get('port'), () => {
    console.log('Express running ->' + app.get('port'));
});