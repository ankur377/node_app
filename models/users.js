const mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true},
    address: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('users', postsSchema)