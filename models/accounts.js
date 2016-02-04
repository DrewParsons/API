var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CanvasSchema = new Schema({
	username: String,
	class1: String,
	class2: String,
	class3: String,
	class4: String,
	class5: String,
	class6: String,
	age: Number
});

var Canvas = mongoose.model('Canvas', CanvasSchema);

module.exports = Account