var express = require("express");
var app = express();
var Account = require('./models/accounts.js');
var mongoose = require('mongoose');
var unirest = require('unirest');

//CURRENTLY ONLY FOR DREW PERSONALLY

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
	var token = '4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7';
	var Request = unirest.post('https://kentdenver.instructure.com/api/v1/courses?access_token=4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7').end(function (response) {
		console.log(response.body);
	});
	
});

router.post('/id', function(req, res) {
	var token = '4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7';
	var Request = unirest.post('https://kentdenver.instructure.com/api/v1/courses?access_token=4992~tEe8O3bXofFexJI7DltCv2v9kxJJcsgGZXOoOlBkGwYIiqRDEeIW6oCoWapUxGy7').end(function (response) {
		console.log(response.body);
	});
	
});

router.get('/account', function(req, res) {
	var username = req.query.username;
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

router.get('/number', function(req, res) {
	
})

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

