var express = require("express");
var app = express();
var Account = require('./models/accounts.js');
var mongoose = require('mongoose');
var unirest = require('unirest');
var bodyParser = require('body-parser');
var findOneOrCreate = require('mongoose-find-one-or-create');

//CURRENTLY ONLY FOR DREW PERSONALLY
app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nodedemo', function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("Connected!")
	}
});

var port = 8001;
var router  = express.Router();

router.post('/register', function(req, res) {
	var username = req.body.username;
	var token = '4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7';
	var Request = unirest.get('https://kentdenver.instructure.com/api/v1/courses?access_token=4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7').end(function (response) {
		console.log(response.body[0].name);
		var courses = [];
		for (var i = 0; i <= response.body.length ; i++) {
			courses[i] = response.body[i].name;
		}
		Canvas.create({username:username}, {courses:courses});
	});
	
});

router.post('/id', function(req, res) {
	var token = '4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7';
	var Request = unirest.get('')('https://kentdenver.instructure.com/api/v1/courses?access_token=4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7').end(function (response) {
		var courseID = [];
		for (var i = 0; i < response.body.length; i++) {
			id[i] = response.body[i].name
		}
		Canvas.findOneOrCreate({courseID:courseID});
	});

	
});

router.get('/account', function(req, res) {
	var username = req.body.username;
	if (username) {
		Canvas.findOne({username:username}, function(error, result) {
			if(error) {
				console.log(error);
				res.status(500).json({error:"That's an error"});
			}
			res.json(result);
		});
	} else {
		res.status(400).json({error:"Username Not Specified"});
	}
});

router.get('/username', function(req, res) {
	var username = req.body.username;
	if (username) {
		Canvas.findOne({username:username}, function(error, result) {
			if(error) {
				console.log(error);
				res.status(500).json({error:"That's an error"});
			}
			res.json(result.courses.length);
		});
	} else {
		res.status(400).json({error:"Username Not Specified"});
	}
});

router.get('/id', function(req, res) {
	var username = req.body.username;
	Canvas.findOne({username:username}, function(error, result) {
		if(error) {
			console.log(error);
			res.status(500).json({error:"That's an error"});
		}
		res.json(result.courseID);
	});
});

router.put('/Username', function(req, res) {
	var newUsername = req.query.username;
	if(username) {
		Canvas.findOneAndUpdate({username:username}, function(error, result) {
			if(error) {
				console.log(error);
				res.status(500).json({error:"That's an error"});
			}
			res.json(result);
		});
	}
});

app.use('/api', router);
app.listen(port)

