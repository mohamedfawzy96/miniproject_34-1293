var express = require('express'),
	app = express(),
	port = process.env.PORT || 8000,
	bodyParser = require('body-parser'),
	//ejsLayouts = require("express-ejs-layouts");
	mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var upload = require('express-fileupload');


// Model we are using to communicate with the DB
require('./models/user')
require('./models/post')


// converts requests bodys from foo=bar&baz=fluf
// to {foo:'bar', team:''mean_squad}
app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'ssshhhhh'}));


//static file server directory
app.use(express.static(__dirname + '/public'));

//set view engine (default is jade), this is used to parse data in the html files
app.set('view engine', 'ejs');
//app.use(ejsLayouts);

// Connecting to the mongoDB with the DB 'example'
mongoose.connect('mongodb://localhost:/test-db')

// ROUTES
var routes = require('./routes/routes');
app.use(routes);

app.listen(port);
console.log('sever on port %s',port);
