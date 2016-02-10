var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Canvas = new Schema({
	username: String,
	courses: Array,
	courseID: Array,
});

var Canvas = mongoose.model('Canvas', Canvas);
