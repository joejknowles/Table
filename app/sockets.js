const socketIo = require('socket.io');
const server = require('./server');

const io = socketIo(server);

io.on('connection', function(socket) {
  socket.on('join', (data) => {
    socket.join(data)
    console.log('connected, rooms: ', socket.rooms);
  });
  socket.on('PLAY_CARD', (data) => {
    console.log(io.of('/').in('player'));
  });

  console.log('connected, rooms: ', socket.rooms);
});
