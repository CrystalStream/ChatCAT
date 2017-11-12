"use strict"

if( process.env.NODE_ENV === 'production' ) {
	// Load all from .env file
	module.exports = {
		HOST: process.env.BASE_URL || "",
		DB_URI: process.env.DB_URI || ""

	}
} else {
	module.exports = require('./development.json');
}