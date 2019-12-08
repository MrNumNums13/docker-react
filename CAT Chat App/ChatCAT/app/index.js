'use strict';

// Social Authentication Logic
require('./auth')();

// Create an IO Server instance
let ioServer = app => {
	app.locals.chatrooms = [];
	const server = require('http').Server(app);
	const io = require('socket.io')(server);
	io.use((socket, next) => {
		require('./session')(socket.request, {}, next);
	})
	require('./socket')(io, app);
	// io.set('transports', ['websocket']);
	// let pubClient = redis(config.redis.port, config.redis.host, {
	// 	auth_pass: config.redis.password
	// });
	// let subClient = redis(config.redis.port, config.redis.host, {
	// 	return_buffers: true,
	// 	auth_pass: config.redis.password
	// });
	// io.adapter(adapter({
	// 	pubClient,
	// 	subClient
	// }));
	return server;
}

module.exports = {
	router: require('./routes')(),
	session: require('./session'),
	ioServer
}

// 