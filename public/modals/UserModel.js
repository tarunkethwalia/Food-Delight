const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUp = new Schema({
    Firstname : String,
    Lastname: String,
    Username: String,
    Password: String,
    Mobile: Number
});

const SignUpModal = mongoose.model('SignUpModal', SignUp);

module.exports = SignUpModal;