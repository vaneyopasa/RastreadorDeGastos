const mongoose = require('mongoose');

//create the function
//use async to avoid callback 

const dbConnect = async() =>{
    try {
        await mongoose.connect (process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB conected Successfully (: !');
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}

module.exports = dbConnect;



