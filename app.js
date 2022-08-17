const express = require("express");
const app = express();

const routesapi =require('./routes/main');

app.use('/api',routesapi);


module.exports = app;

