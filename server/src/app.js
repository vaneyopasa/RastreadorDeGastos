const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const userRoute = require('./routes/uesrs/usersRoute');
const app = express();

//env
dotenv.config();

//dbConect
dbConnect();

//middlewares
app.use(express.json());


//routes
// in the method provide:
// a path means where you want to go and call a function

app.use("/api/users", userRoute);

//Error
app.use(notFound);
app.use(errorHandler);


//ingresos

//gastos


module.exports = app;
module.exports = {errorHandler};
