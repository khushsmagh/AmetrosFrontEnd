const admin = require('firebase-admin');

var serviceAccount = require('./ametros-460b9-a9813dababd0.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

module.exports = {db};

