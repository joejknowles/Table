import io from 'socket.io-client';

export default () => {
  const socket = io();
  socket.connect();
  return socket;
};

export const joinTablesRoom = (socket) =>
  socket.emit('join', 'tables');

export const joinPlayersRoom = (socket) =>
  socket.emit('join', 'players');

export const playCard = (socket, card) =>
  socket.emit('PLAY_CARD', card);
