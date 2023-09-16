const mongoose = require('mongoose');

/**
 * User Schema has the variables
 * username, email, password (all are required)
 */
const userSchema = mongoose.Schema({
    username:{type: String, required: [true, 'Please add a name']},
    email:{type: String, required: [true, 'Please add a email'], unique:true},
    password:{type: String, required: [true, 'Please add a password']},
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;