const dal = require('./dal');

const addClient = ({code, clientType, socketId}) => {
  const game = dal.getGame(code);
  if (clientType === 'PLAYER' && game) dal.addPlayer(code, socketId);
  return game;
};

const playCard = (gameCode) => {
  const card = dal.moveNextCard(gameCode);
  const currentPlayer = dal.setNextPlayer(gameCode);
  return {
    card, currentPlayer
  };
};

const begin = (gameCode) => {
  dal.startGame(gameCode);
  const currentPlayer = dal.currentPlayer(gameCode);
  return { currentPlayer };
};

const newGame = () => dal.newGame();

const gameplay = {
  newGame, begin,
  addClient,
  playCard
};

 module.exports = gameplay;
