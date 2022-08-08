const express = require("express");
const dbconnect = require("./mongodb");
const route  = express();

route.get("/", async (req, res) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn("send successful");
    res.send(data);
});

route.listen(5000);