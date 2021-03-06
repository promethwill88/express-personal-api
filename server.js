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

let db = require('./models');

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
        description: "A little story about myself",
        name: 'Will Fong'
      },
      {
        method: "GET",
        path: "/api/toys",
        description: "Wishlist of toys"
      },
      {
        method: "GET",
        path: "/api/toys/:id",
        description: "Get one specific wishlist item"
      },
      {
        method: "POST",
        path: "/api/toys",
        description: "Add new item to wishlist"
      },
      {
        method: "PUT",
        path: "/api/toys",
        description: "Update an item to wishlist"
      },
      {
        method: "DELETE",
        path: "/api/toys",
        description: "Delete an item to wishlist"
      }
    ]
  })
});

app.get('/api/profile', function apiIndex(req, res) {
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: 'Welcome to my profile.',
    documentationUrl: 'https://github.com/promethwill88/express-personal-api/README.md',
    baseUrl: 'https://still-peak-99992.herokuapp.com/',
    githubLink: 'https://github.com/promethwill88',
    githubProfileImage: 'https://avatars2.githubusercontent.com/u/7003367?v=3&s=400',
    personalSiteLink: 'http://willfong.me/',
    currentCity: 'San Francisco',
    garage: [
      {
        name: 'Mila 1',
        type: 'car',
        usage: 'road',
        country: 'Germany',
        year: 2004,
        brand: 'BMW',
        model: '325i',
        color: 'Oxford Green',
        own: false
      },
      {
        name: 'Mila 2',
        type: 'car',
        usage: 'road',
        country: 'Germany',
        year: 2006,
        brand: 'BMW',
        model: '325ci',
        color: 'Jet Black',
        own: false
      },
      {
        name: 'Audrey',
        type: 'car',
        usage: 'road',
        country: 'Germany',
        year: 2004,
        brand: 'BMW',
        model: 'M3',
        color: 'Silver Gray',
        own: true
      },
      {
        name: 'Michelle',
        type: 'motorbike',
        usage: 'road',
        country: 'Britan',
        year: 2014,
        brand: 'Triumph',
        color: 'Matte Graphite',
        model: 'Street Triple R',
        own: true
      }
    ]
  });    
});

// Get all toys
app.get('/api/toys', function(req, res){
  db.ToyModel.find(function(err, toy){
    if(err){
      return console.log('index error: ' + err);
    }
    res.json(toy);
  });
});

// Get toy by id
app.get('/api/toys/:id', function(req, res){
  db.ToyModel.findOne({ _id: req.params.id }, function(err, toy){
    if(err){
      res.status(500).send(err);
      return;
    }
    res.json(toy);
  });
});

// Create toy
app.post('/api/toys', function(req, res){
  // Create new toy with form data (`req.body`)
  console.log('toy create', req.body);
  let newToy = new db.ToyModel(req.body);
  newToy.save(function (err, savedToy){
    res.json(savedToy);
  });
});

//Update specific toy by id
// app.push('/api/toys/:id', function(req, res){
//   db.ToyModel.findOne({ _id: req.params.id }, function(err, toy){
//     if(err){
//       res.status(500).send(err);
//       return;
//     }
//     res.json(toy);
//   });
// });

// Delete a toy
app.delete('/api/toys/:id', function(req, res){
  // Get toy ID from url params ('req.params')
  console.log('books delete', req.params);
  let toyId = req.params.id;
  // Find index of the toy we want to remove
  db.ToyModel.findOneAndRemove({ _id: toyId }, function(err, deletedToy){
    res.json(deletedToy);
  });
});


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
