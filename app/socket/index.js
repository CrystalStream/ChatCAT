"use strict"

const helpers = require('../helpers');

module.exports = (io, app) => {
  let allrooms = app.locals.chatrooms

	io.of('/roomslist').on('connect', socket => {

    socket.on('getChatrooms', () => {
      socket.emit('chatRoomList', JSON.stringify(allrooms));
    })

		socket.on('createRoom', newRoomInput => {
      // check to see if a room exists otherwise create it and broadcast it
      if(!helpers.findRoomByName(allrooms, newRoomInput)) {
        allrooms.push({
          room: newRoomInput,
          roomID: helpers.randomHex(),
          users: []
        });

        // Emit the list updated to the creator
        socket.emit('chatRoomList', JSON.stringify(allrooms));
        // Emit the list updated to evryone connected to the rooms page ('/roomslist')
        socket.broadcast.emit('chatRoomList', JSON.stringify(allrooms));
      }
    });
	});
}
