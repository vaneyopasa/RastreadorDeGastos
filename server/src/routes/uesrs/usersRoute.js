const express = require("express");
const {
     registerUser,
     fetchUsersCtrl, 
    } = require('../../controllers/users/usersCtrl');


const userRoute = express.Router();

// here we have all the http methods
userRoute.post('/register', registerUser);
userRoute.get('/', fetchUsersCtrl);
module.exports = userRoute;