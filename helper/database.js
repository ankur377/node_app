const mongoose = require('mongoose');
require('dotenv').config();
let db = mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.warn("connected");
}).catch(() => {
    console.warn("disconnected");
});


module.exports = db;
