const socketIo = require('socket.io');

const games = [{
  status: 0,
  code: '1234'
}];

const onJoin = (socket) => {
  socket.on('join', (data) => {
    const game = games.filter((game) => game.code === data.gameCode)[0];
    const code = game ? game.code : '';
    socket.join(code);
  });
};


const onPlayCard = (socket, io) => {
  socket.on('PLAY_CARD', (data) => {
    io.in(data.gameCode).emit('PLAY_CARD', data);
  });
};

const onBegin = (socket, io) => {
  socket.on('REQUEST_BEGIN_GAME', (data) => {
    io.emit('BEGIN_GAME', data);
  });
};

const createGame = () => ({
  status: 0,
  code: `${ Math.floor(Math.random()*90000) + 10000 }`
});

const onNew = (socket, io) => {
  socket.on('REQUEST_NEW_GAME', (data) => {
    const game = createGame();
    games.push(game);
    socket.join(game.code, () => {
      io.in(game.code).emit('NEW_GAME', game)
    });
  });
};

module.exports = {
  addHandlers: (io) => {
    io.on('connection', function(socket) {
      onJoin(socket);
      onBegin(socket, io);
      onPlayCard(socket, io);
      onNew(socket, io);
    });
  },
  connectSockets: (server) => {
    const io = socketIo(server);
    module.exports.addHandlers(io);
  }
};
