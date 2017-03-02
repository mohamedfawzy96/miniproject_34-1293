var mongoose = require('mongoose'),
User = mongoose.model('user');
post = mongoose.model('post');


module.exports.login_page = [
	function(req,res,next) {
		res.render('login2',{'req':req,'error_login':false,'error_signup':false})
	}
];


module.exports.login = [
	function(req,res,next) {
		auth(req.body.username,req.body.password,res,req)
	}
];

module.exports.signup = function(req,res,next) {
	user1 = req.body.username
	pass = req.body.password
	var user = User.find({
		username:user1,
		password:pass
 },function(error,response) {
		if(response.length != 0){
			res.render('login2', {'error_signup':'Username already exists !','req':req,'error_login':false});
		} else {
			User.create(req.body, function(err, user) {
				req.session.user = req.body.username
				if(err) return next(err);
				res.redirect('/'+req.body.username);
			 });
		 	}
		//res.redirect('/');
		//res.redirect();
})

															}

module.exports.profile_view = function(req,res,next) {


	user1  = req.params.username;
	console.log(req.session);
	var user = User.find({username:user1},function(error,response) {
		console.log(user1);
		if(error){
		}else {
			post.find({user:user1},function(error,posts){
				console.log(posts);
				res.render('profile',{user:response,req:req,posts:posts})
			})
		}
	})
}


function auth(user, pass,res,req){
	  var user = User.find({
		  username:user,
		  password:pass
	 },function(error,response) {
			if(response.length != 0){
				console.log('insideee');
				console.log(response);
				console.log('insideee2');
				req.session.user = req.body.username
				res.redirect('/'+req.body.username);
			} else {
				res.render('login2', {'error_login':'Wrong username or password','req':req,'error_signup':false});
			}
			//res.redirect('/');
			//res.redirect();
 	})

}
