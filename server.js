"use stric"

const express = require("express");
const app = express();

// This normaly will look into the app folder for an index.js file
const chatCat = require('./app');

// Set the renderer
app.set('view engine', 'ejs');

// Set up the router
app.use('/', chatCat.router)

// assets middleware
app.use(express.static('public'))

// Listen to the port
app.listen(process.env.PORT || 3000, () => {
	console.log("ChatCAT Running on port 3000");
})