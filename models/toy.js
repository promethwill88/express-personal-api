let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let toySchema = new Schema({
    name: String,
    type: String,
    usage: String,
    country: String,
    year: Number,
    brand: String,
    model: String,
    color: String,
	own: Boolean
});

let ToyModel = mongoose.model('Toy', toySchema);

module.exports = toyModel;