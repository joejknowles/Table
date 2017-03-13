const gameStatus = require('../../client/src/shared/constants/gameStatus');
const data = require('./data');
const cards = require('./cardSpecies');
const gamesByCode = data.gamesByCode;
const players = data.players;

const createGame = () => ({
  status: gameStatus.setup,
  code: `${ Math.floor(Math.random()*90000) + 10000 }`,
  playerCount: 0,
  players: [],
  pilesByOwner: {},
  turn: 0
});

const createPlayer = (id) => {
  return {
    id: id, cards: []
  };
};

const getGame = (code) => {
  return gamesByCode[code];
}

const startGame = (code) => {
  getGame(code).status = gameStatus.ongoing;
}

const currentPlayer = (code) => {
  const game = getGame(code);
  return game.players[game.turn];
}

const setNextPlayer = (code) => {
  const game = getGame(code);
  game.turn = ((game.turn + 1) % game.players.length);
  return currentPlayer(code);
};

const moveNextCard = (code) => { // TODO:: deal real cards
  return cards.pop();
}

module.exports = {
  getGame: getGame,
  newGame: () => {
    const game = createGame();
    gamesByCode[game.code] = game;
    return game;
  },
  addPlayer: (gameCode, playerId) => {
    const game = getGame(gameCode);
    game.playerCount++;
    game.players.push(playerId);
    players[playerId] = createPlayer(playerId);
  },
  startGame,
  currentPlayer,
  setNextPlayer,
  moveNextCard
}
