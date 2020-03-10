const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleID : String,
    email: String,
    accountName: String
});

mongoose.model('User', userSchema);