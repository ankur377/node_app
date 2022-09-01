require('dotenv').config();
const express = require("express");
const app = express();
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

const routesApi = require('./routes/main');


app.use('/api', jsonParser, routesApi);



const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your App is listening on port http://localhost:' + listener.address().port)
})

