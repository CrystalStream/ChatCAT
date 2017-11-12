"use strict"

const router = require('express').Router();

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

module.exports = {
	route
}