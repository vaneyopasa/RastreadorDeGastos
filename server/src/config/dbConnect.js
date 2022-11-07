const mongoose = require('mongoose');

//create the function
//use async to avoid callback 

const dbConnect = async() =>{
    try {
        await mongoose.connect('mongodb+srv://me:sxQctnKlHp6KnW3w@rastreadordegastos.5ym0hju.mongodb.net/RastreadorDeGastos?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log('DB conected Successfully (: !');
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
}

module.exports = dbConnect;

