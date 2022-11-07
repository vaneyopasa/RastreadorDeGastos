const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();

//dbConect
dbConnect();
module.exports = app;

