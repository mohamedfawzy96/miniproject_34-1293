var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var PostSchema = new Schema({
	caption:String,
  link:String,
	user:String,
  photo:String,
	description:String

});

mongoose.model('post', PostSchema);
