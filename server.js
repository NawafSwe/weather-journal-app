// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

//--------------------testing routes-------------------------------//
app.get('/welcome', function (req, res) {
  res.send('Welcome');
});

//--------------------post routes-------------------------------//
function post_weather(req, res) {
  console.log(req.body);
  projectData = req.body;
}

app.post('/sendData', post_weather);

//--------------------get routes-------------------------------//

function load(req, res) {
  res.send(projectData);
}

app.get('/all', load);

// Setup Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
