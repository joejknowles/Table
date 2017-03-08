const socketIo = require('socket.io');

const games = [{
  status: 0,
  code: '1234'
}];

const onNew = (socket) => {
  socket.on('newGame', (data) => {
    const game = games[0];
    socket.join(game.code);
    socket.emit('game', games[0]);
  });
};

const onJoin = (socket) => {
  socket.on('join', (data) => {
    const game = games.filter((game) => game.code === data.code)[0];

    socket.join(data);
  });
};

const onPlayCard = (socket, io) => {
  socket.on('PLAY_CARD', (data) => {
    io.in('tables').emit('PLAY_CARD', data);
  });
};


const onBegin = (socket, io) => {
  socket.on('BEGIN_GAME', (data) => {
    socket.broadcast('BEGIN_GAME', data);
  });
};

module.exports = {
  addHandlers: (io) => {
    io.on('connection', function(socket) {
      onJoin(socket);
      onBegin(socket);
      onPlayCard(socket, io);
    });
  },
  connectSockets: (server) => {
    const io = socketIo(server);
    module.exports.addHandlers(io);
  }
};
