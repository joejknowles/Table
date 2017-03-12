const data = require('./data');
const gamesByCode = data.gamesByCode;
const players = data.players;

const createGame = () => ({
  status: 0,
  code: `${ Math.floor(Math.random()*90000) + 10000 }`,
  playerCount: 0,
  players: []
});

const createPlayer = (id) => {
  return {
    id: id, cards: []
  };
};

const getGame = (code) => {
  return gamesByCode[code];
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
  }
}
