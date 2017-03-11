import io from 'socket.io-client';

export default () => {
  const socket = io();
  socket.connect();
  return socket;
};

export const joinTablesRoom = (socket, gameCode) => {
  socket.emit('join', { clientType: 'TABLE', gameCode });
};

export const joinPlayersRoom = (socket, gameCode) =>
  socket.emit('join', { clientType: 'PLAYER', gameCode });

export const playCard = (socket, card) =>
  socket.emit('PLAY_CARD', card);
