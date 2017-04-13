// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to the Will Fong Experience api! Here's some light reading.",
    documentationUrl: "https://github.com/promethwill88/express-personal-api/README.md",
    baseUrl: "https://still-peak-99992.herokuapp.com/",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
      },
      {
        method: "GET",
        path: "/api/profile",
        description: "A little story about myself"
        name: 'Will Fong'
      },
      {
        method: "GET",
        path: "/api/projects",
        description: "A little story about myself"
      },
      {
        method: "POST",
        path: "/api/moviestowatch",
        description: "E.g. Add movies to watch"
      }
    ]
  })
});

app.get('/api/profile', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: 'Welcome to my profile.',
    documentationUrl: 'https://github.com/promethwill88/express-personal-api/README.md',
    baseUrl: 'https://still-peak-99992.herokuapp.com/',
    githubLink: 'https://github.com/promethwill88',
    githubProfileImage: 'https://avatars2.githubusercontent.com/u/7003367?v=3&s=400',
    personalSiteLink: 'http://willfong.me/',
    currentCity: 'San Francisco',
    toys: [
      {
        name: 'Mila 1',
        type: 'car',
        year: 2004,
        brand: 'BMW',
        model: '325i',
        status: 'sold'
      },
      {
        name: 'Mila 2',
        type: 'car',
        year: 2006,
        brand: 'BMW',
        model: '325ci',
        status: 'sold'
      },
      {
        name: 'Audrey',
        type: 'car',
        year: 2004,
        brand: 'BMW',
        model: 'M3',
        status: 'own'
      },
      {
        name: 'Michelle',
        type: 'motorbike',
        year: 2014,
        brand: 'Triumph',
        model: 'Street Triple R',
        status: 'own'
      }
    ]
});

app.get('/api/projects', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
    name: 'geoquakes',
    
});


        

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
