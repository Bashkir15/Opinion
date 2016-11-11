function send(io) {
	return function (socketId, data) {
		console.log('NOTIFICATION FOR:', socketId);
		io.to(socketId).emit(data);
	}
}

module.exports = {
	send: send
};