
const expressAsyncHandler = require('express-async-handler');
//require the model
const User = require("../../model/User");


//register
const registerUser = expressAsyncHandler( async (req, res) => {
    const{email, firstname, lastname, password} = req?.body;

    //Revisar si el usuario existe
    const userExists = await User.findOne({email});
    if (userExists) throw new Error("El usuario ya existe");       
    
    try {
            
            const user = await User.create({email, firstname, lastname, password});
            res.status(200).json(user);
        } catch (error) {
            res.json(error);
        }
    }
);

//fetch all users
const fetchUsersCtrl = expressAsyncHandler( async (req, res) =>{
        try {
            const users = await User.find({});
            res.json(users);
        } catch (error) {
            res.json(error);
        }
    });


module.exports = {registerUser, fetchUsersCtrl};