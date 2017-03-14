const gameplay = require('../../game/snap');

const snap = (socket, io) => {
  socket.on('SNAP', ({ gameCode }) => {
    const response = gameplay.snap(gameCode, socket.id);
    io.in(gameCode).emit('SNAP_RESULT', response);
  });
};

module.exports = snap;
