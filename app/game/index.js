const dal = require('./dal');

const newGame = () => dal.newGame();

const begin = (gameCode) => {
  const piles = dal.startGame(gameCode);
  const currentPlayer = dal.currentPlayer(gameCode);
  return { currentPlayer, piles };
};

const addClient = ({gameCode, clientType, socketId}) => {
  const game = dal.getGame(gameCode);
  if (!game) return {};
  if (clientType === 'PLAYER') dal.addPlayer(gameCode, socketId);
  return {
    playerCount: game.playerCount
  };
};

const playCard = (gameCode) => {
  const card = dal.moveNextCard(gameCode);
  const currentPlayer = dal.setNextPlayer(gameCode);
  return {
    card, currentPlayer
  };
};

const gameplay = {
  newGame, begin,
  addClient,
  playCard
};

 module.exports = gameplay;
