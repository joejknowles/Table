const socketIo = require('socket.io');
const server = require('./server');

const io = socketIo(server);

io.on('connection', function(socket) {
  socket.on('join', (data) => {
    socket.join(data)
    console.log('connected, rooms: ', socket.rooms);
  });
  socket.on('PLAY_CARD', (data) => {
    console.log('card played')
    io.in('tables').emit('PLAY_CARD', data);
  });

  setInterval(()=>
    console.log('connected, rooms: ', socket.rooms),
    5000
  );
});
