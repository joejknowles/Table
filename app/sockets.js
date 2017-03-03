const socketIo = require('socket.io');

module.exports = {
  connectSockets: (server) => {
    const io = socketIo(server);

    io.on('connection', function(socket) {
      socket.on('join', (data) => {
        socket.join(data);
      });

      socket.on('PLAY_CARD', (data) => {
        io.in('tables').emit('PLAY_CARD', data);
      });
    });
  }
};
