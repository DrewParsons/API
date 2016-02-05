var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Canvas = new Schema({
	username: String,
	class1: String,
	class2: String,
	class3: String,
	class4: String,
	class5: String,
	class6: String,
});

var Canvas = mongoose.model('Canvas', Canvas);
