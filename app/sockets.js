const socketIo = require('socket.io');
const cards = require('./game/cards');
const data = require('./game/data');
const dal = require('./game/dal');

const onJoin = (socket, io) => {
  socket.on('join', (data) => {
    const game = dal.getGame(data.gameCode);
    if (game) {
      const code = game.code;
      socket.join(code, () => {
        if (data.clientType === 'PLAYER') dal.addPlayer(code, socket.id);
        io.in(code).emit('PLAYER_ADDED', { game });
      });
    }
  });
};

const onPlayCard = (socket, io) => {
  socket.on('PLAY_CARD', (data) => {
    io.in(data.gameCode).emit('PLAY_CARD', cards.pop());
  });
};

const onBegin = (socket, io) => {
  socket.on('REQUEST_BEGIN_GAME', (data) => {
    io.in(data.gameCode).emit('BEGIN_GAME', {});
  });
};

const onNew = (socket, io) => {
  socket.on('REQUEST_NEW_GAME', (data) => {
    const game = dal.newGame();
    socket.join(game.code, () => {
      io.in(game.code).emit('NEW_GAME', game)
    });
  });
};

module.exports = {
  addHandlers: (io) => {
    io.on('connection', function(socket) {
      onJoin(socket, io);
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
