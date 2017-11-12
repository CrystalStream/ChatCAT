"use strict"

const config = require('../config');

const Mongoose = require('mongoose').connect(config.DB_URI);

// Log error if so
Mongoose.connection.on('error', error => {
    console.error("MongoDB error", error);
})

module.exports = {
	Mongoose
}