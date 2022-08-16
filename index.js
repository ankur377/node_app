const express = require("express");
const dbconnect = require("./mongodb");
const app = express();
const port = 5000;

app.get("/", async (req, res) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn("send successful");
    res.send(data);
});

app.post("/login",(req,res)=>{
    let responseList =req.body;
    res.send(responseList);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})
