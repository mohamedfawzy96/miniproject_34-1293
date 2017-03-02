var mongoose = require('mongoose'),
User = mongoose.model('user');
post = mongoose.model('post');


module.exports.summary_view = [
	function(req,res,next) {
    post.find(function(error,response) {
			if(error){
				console.log(error);
			} else {

			}
      res.render('summary',{'posts':response,'req':req})
			//res.redirect('/');
			//res.redirect();
 	})
	}
];
