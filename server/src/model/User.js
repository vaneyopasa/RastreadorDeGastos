const mongoose = require ("mongoose");

//schema

const userSchema = mongoose.Schema({
    firstname: {
        required: [true, 'Este campo es obligatorio'],
        type: String,
    },
    lastname: {
        required: [true, 'Este campo es obligatorio'],
        type: String,
    },
    email: {
        required: [true, 'Este campo es obligatorio'],
        type: String,
    },
    firstname: {
        required: [true, 'Este campo es obligatorio'],
        type: String,
    },
    password: {
        required: [true, 'Este campo es obligatorio'],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false, 
    },
}, {
    timestamp: true,
});

//compile schema into model

const User = mongoose.model("User", userSchema);
module.exports = User;