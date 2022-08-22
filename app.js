const express = require("express");
const app = express();
let bodyparser = require('body-parser');
let jsonparser = bodyparser.json();

const routesapi =require('./routes/main');

app.use('/api',jsonparser,routesapi);


module.exports = app;

