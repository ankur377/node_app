const express = require("express");
const app = express();
let bodyparser = require('body-parser');
let jsonparser = bodyparser.json();

const routesapi = require('./routes/main');


app.use('/api', jsonparser, routesapi);



const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('Your app is listening on port http://localhost:' + listener.address().port)
})

