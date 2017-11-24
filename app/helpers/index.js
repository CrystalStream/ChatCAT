"use strict"

const router = require('express').Router();
const db = require('../db');
const crypto = require('crypto');

// Iterate over the routes and mount them
let _registerRoute = (routes, method) => {
	for (let key in routes) {
		if( routes[key] && typeof routes[key] === 'object' && !(routes[key] instanceof Array) ){
			_registerRoute(routes[key], key);
		} else{
			// Register routes
			if (method === 'get'){
				router.get(key, routes[key])
			}
			else if (method === 'post') {
				router.get(key, routes[key])
			}
			else if (method === 'NA') {
				router.use(routes[key])
			}
		}
	}
}

let route = (routes) => {
	_registerRoute(routes)
	return router;
}

// Find by id (MongoID)
let findById = id => {
	return new Promise((resolve, reject) => {
		  db.userModel.findById(id, (error, user) => {
		  	if (error) return reject(error);
		  	resolve(user)
		  })
	})
}

// Find a single user based on a key
let findOne = profileId => {
	return db.userModel.findOne({
		'profileId': profileId
	})
}

// Find a room by a given name
let findRoomByName = (allRooms, room) => {
  let findRoom = allRooms.findIndex( (ele) => ele.room === room)
  return findRoom > -1;
}

// Generate a unique id
let randomHex = () => {
  return crypto.randomBytes(24).toString('hex');
}

// Find room by the given id
let findRoomById = (allRooms, roomID) => {
  return allRooms.find( (room) =>room.roomID === roomID );
}

// Create a new user and return that instance
let createNewUser = profile => {
	return new Promise( (resolve, reject) => {
		let newChatUser = new db.userModel({
			profileId: profile.id,
			fullName: profile.displayName,
			profilePic: profile.photos[0].value || '',
		});

		newChatUser.save( error => {
			if ( error ) return reject(error)
			return resolve(newChatUser)

		})
	})
}

// middleware to check if the user is authenticated
let isAuthenticated = (req, res, next) => {
	if( req.isAuthenticated()) return next();
	res.redirect('/');
}

module.exports = {
	route,
	findOne,
	createNewUser,
	findById,
  isAuthenticated,
  findRoomByName,
  randomHex,
  findRoomById
}
