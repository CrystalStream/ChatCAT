"use strict"

// Social Authentication Logic loaded
require('./auth')();

module.exports = {
	router: require('./routes/routes')(),
	session: require('./session')
}