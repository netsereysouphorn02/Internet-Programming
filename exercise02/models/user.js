const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Enter Username"],
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Enter Email"],
    },
    firstname: {
        type: String,
        required: [true, "Enter FirstName"],
    },
    lastname: {
        type: String,
        required: [true, "Enter LastName"],
    },
    password: {
        type: String,
        required: [true, "Enter Password"],
    },
}, {
    timestamps: true,
});

var user = mongoose.model('Users', userSchema);
module.exports = {
    user,
}