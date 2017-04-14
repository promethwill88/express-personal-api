// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

let db = require('./models');

// Data

let toy = [
  {
    name: '',
    type: 'car',
    usage: 'race',
    country: 'Britan',
    year: 2008,
    brand: 'McLaren',
    model: 'MP4-22',
    color: 'Silver',
    own: false
  },
  {
    name: '',
    type: 'car',
    usage: 'road',
    country: 'Italy',
    year: 1987,
    brand: 'Ferrari',
    model: 'F40',
    color: 'Rosso Corsa',
    own: false
  },
  {
    name: '',
    type: 'car',
    usage: 'road',
    country: 'Britan',
    year: 1961,
    brand: 'Jaguar',
    model: 'E-Type',
    color: 'British Racing Green',
    own: false
  },
  {
    name: '',
    type: 'motorbike',
    usage: 'road',
    country: 'Italy',
    year: 2008,
    brand: 'Ducati',
    model: '1299 Panigale R',
    color: 'Ducati Red',
    own: false
  },
  {
    name: '',
    type: 'car',
    usage: 'race',
    country: 'Italy',
    year: 1966,
    brand: 'Ferrari',
    model: '330 P3',
    color: 'Rosso Corsa',
    own: false
  }
];

db.ToyModel.create(toy, function(err, toy){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new toy", toy._id)
  process.exit(); // we're all done! Exit the program.
})
