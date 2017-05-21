var express = require('express'),
	router = express.Router();


module.exports = function (passport) {

	//Used for routes that must be authenticated.
	function isAuthenticated(req, res, next) {
		// if user is authenticated in the session, call the next() to call the next request handler 
		// Passport adds this method to request object. A middleware is allowed to add properties to
		// request and response objects
		if (req.isAuthenticated()) {
			return next();
		};

		// if the user is not authenticated then redirect him to the login page
		responce = { state: 'failed' }
		return res.send(responce);
	};
	
//sends successful login state back
router.get('/success', function (req, res) {
	req.session.save(() => {
		req.user.password = ''; // Delete Password has from responce 
		res.send({ state: 'success', user: req.user ? req.user : null });
	})
});

//sends failure login state back
router.get('/failure', function (req, res) {
	res.send({ state: 'failure', user: null, message: "Invalid username or password" });
});


//login
router.post('/login', passport.authenticate('login', {
	successRedirect: '/auth/success',
	failureRedirect: '/auth/failure',
	session: true
}));

//sign up
router.post('/signup', passport.authenticate('signup', {
	successRedirect: '/auth/success',
	failureRedirect: '/auth/failure',
	session: true
}));

//logout
router.get('/logout', function (req, res) {
	req.logout();
	responce = { state: 'success' }
	res.send(responce);
});

//is auth
router.get('/isauth', isAuthenticated, function (req, res) {
	responce = {
		state: 'success', user: {
			username: req.user.username,
			level: req.user.level
		}
	};
	res.send(responce);
});

return router;

};