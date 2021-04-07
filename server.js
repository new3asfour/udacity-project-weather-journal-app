// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// spin up the server
const port = 8080;
const server = app.listen(port, function() {
    console.log(`Running on localhost: ${port}`);
});

// Get route returns projectData
app.get('/all', function(req, res) {
    res.send(projectData);
});

// Post route adds data to projectData
app.post('/add', function(req, res) {
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse,
    };
    res.send({
        status: 200,
        message: "Successfully added an entry."
    });
});