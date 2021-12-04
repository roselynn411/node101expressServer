// import files and packages up here
const express = require('express');
//install morgan to use it later
const morgan = require('morgan');
//install top spots data to use later
const topSpots = require('./data');


// create your express server below
const app = express();

// // A port to launch the website 
// const http = require('http');

// add your routes and middleware below.  
app.use(morgan('dev'));
// const router = express.Router();
// app.use('/',router);

//✓ GET / respond
app.get('/', function(req, res) {
 console.log('I want to get the respond 200')
 res.send("200")
});

//GET /data responds with all top spots
app.get('/data', function(req, res){
    console.log("Please send me the topspot data")
    res.send(topSpots);
});

// finally export the express application
 module.exports = app;