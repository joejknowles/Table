const dal = require('./dal');

const addClient = (data, socketId) => { // try destructuring variables
  const game = dal.getGame(data.gameCode);
  if (data.clientType === 'PLAYER' && game) dal.addPlayer(game.code, socketId);
  return game;
};

const playCard = (gameCode) => {
  const card = dal.moveNextCard(gameCode);
  const currentPlayer = dal.setNextPlayer(gameCode);
  return {
    card, currentPlayer
  };
}

const commands = {
  addClient,
  playCard
};

 module.exports = commands;
