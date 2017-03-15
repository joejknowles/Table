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
  piles: { 'TABLE': [] },
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
  return game.piles;
}

const currentPlayer = (code) => {
  const game = getGame(code);
  return game.players[game.turn];
}

const setNextPlayer = (code, playerId) => {
  const game = getGame(code);
  if (playerId) {
    game.turn = game.players.indexOf(playerId);
  } else {
    game.turn = ((game.turn + 1) % game.players.length);
  }
  return currentPlayer(code);
};

const moveNextCard = (code) => {
  const game = getGame(code);
  const nextCard = game.piles[currentPlayer(code)].pop();
  game.piles['TABLE'].push(nextCard);
  return nextCard;
};

const getLastTableCards = (code) => {
  const game = getGame(code);
  const tableCards = game.piles['TABLE'];
  return tableCards.slice(tableCards.length - 2);
}

const movePile = (gameCode, from, to) => {
  const game = getGame(gameCode);
  const movingCards = game.piles[from];
  game.piles[to] = movingCards.reverse().concat(game.piles[to]);
  game.piles[from] = [];
  return game.piles[to].length;
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
  moveNextCard,
  getLastTableCards,
  movePile
}
