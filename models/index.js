const mongoose = require('mongoose');

const userListSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    status: { type: String, required: true },
    reason: { type: String, required: true },
    userId: { type: String, required: true },
    data: { type: Object, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
});


const User = mongoose.model('users', userSchema);
const userDetail = mongoose.model('userdetails', userListSchema);


module.exports = {
    User, userDetail
}