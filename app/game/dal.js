const gameStatus = require('../../client/src/shared/constants/gameStatus');
const data = require('./data');
const deal = require('./deal');
const cards = require('./cardSpecies');
const gamesByCode = data.gamesByCode;
const players = data.players;

const createGame = () => ({
  status: gameStatus.setup,
  code: `${ Math.floor(Math.random()*90000) + 10000 }`,
  playerCount: 0,
  players: [],
  piles: {},
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
  const game = getGame(code);
  game.status = gameStatus.ongoing;
  const piles = deal(cards, game.players.length);
  game.players.forEach((player, index) => game.piles[player] = piles[index]);
  game.piles['TABLE'] = [];
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

const moveNextCard = (code) => {
  const game = getGame(code);
  const nextCard = game.piles[currentPlayer(code)].pop();
  game.piles['TABLE'].push(nextCard);
  return nextCard;
};

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
