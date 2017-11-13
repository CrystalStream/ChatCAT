"use strict"

if( process.env.NODE_ENV === 'production' ) {
	// Load all from .env file
	module.exports = {
		HOST: process.env.BASE_URL || "",
		DB_URI: process.env.DB_URI || "",
		SESSION_SECRET: process.env.SESSION_SECRET || "",
		FB: {
			APP_ID : process.env.APP_ID || "",
			APP_SECRET: process.env.APP_SECRET || "",
			CALLBACK_URL: process.env.BASE_URL + "auth/facebook/callback" || "",
			PROFILE_FIELDS: process.env.PROFILE_FIELDS || [],
		}
	}
} else {
	module.exports = require('./development.json');
}