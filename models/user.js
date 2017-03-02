var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var UserSchema = new Schema({
	username:String,
	password:String,
	email:String,
	tel:String
});

mongoose.model('user', UserSchema);
