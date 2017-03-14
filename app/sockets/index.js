const socketIo = require('socket.io');
const addListeners = require('./listeners');

module.exports = {
  connectSockets: (server) => {
    const io = socketIo(server);
    addListeners(io);
  }
};
