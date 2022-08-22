const mongoose = require('mongoose');
let db = mongoose.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("connected");
}).catch(()=>{
    console.warn("disconnected");
});


module.exports = db;
