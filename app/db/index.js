"use strict"

const config = require('../config');

const Mongoose = require('mongoose');

// Using global promises instead Mongoose's deprecated one
Mongoose.Promise = global.Promise;

// Connect to db
Mongoose.connect(config.DB_URI, {
	useMongoClient: true
}).then( (db) => {})

// Log error if so
Mongoose.connection.on('error', error => {
    console.error("MongoDB error", error);
})

module.exports = {
	Mongoose
}