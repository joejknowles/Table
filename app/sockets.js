const socketIo = require('socket.io');
const server = require('./server');

const io = socketIo(server);

io.on('connection', function(socket) {
  socket.on('join', (data) => {
    socket.join(data);
  });

  socket.on('PLAY_CARD', (data) => {
    io.in('tables').emit('PLAY_CARD', data);
  });
});
