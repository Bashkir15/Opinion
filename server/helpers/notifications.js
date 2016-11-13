module.exports = (io) => {
	var obj = {};

	obj.send = (socketId, data) => {
		console.log('NOTIFICATION FOR:', socketId);
		io.to(socketId).emit(data);
	};

	return obj;
};
