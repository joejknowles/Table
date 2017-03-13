const socketIo = require('socket.io');
const dal = require('./game/dal');
const gamePlay = require('./game/index');

const onJoin = (socket, io) => {
  socket.on('join', (data) => {
    const response = gamePlay.addClient(data, socket.id);
    if (response) {
      const code = response.code;
      socket.join(code, () => {
        io.in(code).emit('PLAYER_ADDED', { game: response });
      });
    }
  });
};

const onPlayCard = (socket, io) => {
  socket.on('PLAY_CARD', (data) => {
    const code = data.gameCode;
    const response = gamePlay.playCard(code);
    io.in(code).emit('CARD_PLAYED', response);
  });
};

const onBegin = (socket, io) => {
  socket.on('REQUEST_BEGIN_GAME', (data) => {
    const code = data.gameCode;
    dal.startGame(code);
    const currentPlayer = dal.currentPlayer(code);
    io.in(data.gameCode).emit('BEGIN_GAME', { currentPlayer });
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
