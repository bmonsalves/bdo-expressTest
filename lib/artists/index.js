var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/sfotipy');

var artistSchema = new Schema({
	name: String,
	slug: String,
	albums: [{
		title: String,
		year: Number,
		image: String
	}],
	shows: [{
		city: String
	}]
});

//crea el modelo (nombre, schema)
var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;