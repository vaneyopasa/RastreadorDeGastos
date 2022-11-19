const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs");

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



//Hash Password
userSchema.pre("save", async function (next){
if(this.isModified('password')){   
    next();
}
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
});


//compile schema into model
const User = mongoose.model("User", userSchema);
module.exports = User;