const gameplay = require('../../game/index');
const snap = require('./snap');

const onNew = (socket, io) => {
  socket.on('REQUEST_NEW_GAME', () => {
    const game = gameplay.newGame();
    socket.join(game.code, () => {
      io.in(game.code).emit('NEW_GAME', game)
    });
  });
};

const onBegin = (socket, io) => {
  socket.on('REQUEST_BEGIN_GAME', (request) => {
    const { gameCode } = request;
    const response = gameplay.begin(gameCode);
    io.in(gameCode).emit('BEGIN_GAME', response);
  });
};

const onJoin = (socket, io) => {
  socket.on('join', (request) => {
    const { gameCode, clientType } = request;
    const response = gameplay.addClient({
      gameCode, clientType, socketId: socket.id
    });
    if (response) {
      socket.join(gameCode, () => {
        io.in(gameCode).emit('PLAYER_ADDED', response);
      });
    }
  });
};

const onPlayCard = (socket, io) => {
  socket.on('PLAY_CARD', (request) => {
    const { gameCode } = request;
    const response = gameplay.playCard(gameCode);
    io.in(gameCode).emit('CARD_PLAYED', response);
  });
};

const addListeners = (io) => {
  io.on('connection', function(socket) {
    onJoin(socket, io);
    onBegin(socket, io);
    onPlayCard(socket, io);
    onNew(socket, io);
    snap(socket, io);
  });
};

module.exports = addListeners;
