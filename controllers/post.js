var mongoose = require('mongoose'),
User = mongoose.model('user');
post = mongoose.model('post');

module.exports.detailed_post = function(req,res,next) {
	}


module.exports.create_post = function(req,res,next) {
	post.create(req.body, function(err, post1) {
		current_user =  req.session.user
		if(err) return next(err);
		if (req.files.photo){
			var sampleFile = req.files.photo;
			sampleFile.mv('public/images/'+post1._id+'.jpg', function(err,response) {
						if (err)
							return res.status(500).send(err);
							url = 'images/'+post1._id+'.jpg'
							post.update({_id:post1._id}, {photo:url},function functionName(error,response) {
							console.log('hiiiiiii');
							res.redirect('/'+current_user);
							});
			 });
		} else{
			res.redirect('/'+current_user);

		}

 })
}
