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

module.exports = mongoose.model('userList', userListSchema);