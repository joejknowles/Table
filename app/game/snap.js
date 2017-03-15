const dal = require('./dal');

const cardsMatch = (gameCode) => {
  const [card1, card2] = dal.getLastTableCards(gameCode);
  return card1 && card2 && card1.rank === card2.rank;
}

const snap = (gameCode, playerId) => {
  const snapped = cardsMatch(gameCode);
  let newCardCount, currentPlayer;
  if (snapped) {
    currentPlayer = dal.setNextPlayer(gameCode, playerId);
    newCardCount = dal.movePile(gameCode, 'TABLE', playerId)
  }
  return {
    snapped,
    snapBy: playerId,
    newCardCount,
    currentPlayer
  }
}

module.exports = {
  cardsMatch,
  snap
}
