const dal = require('./dal');

const cardsMatch = (gameCode) => {
  const [card1, card2] = dal.getLastTableCards(gameCode);
  return card1 && card2 && card1.rank === card2.rank;
}

const snap = (gameCode, playerId) => {
  const snapped = cardsMatch(gameCode);
  let newCardCount;
  if (snapped) {
    dal.setNextPlayer(gameCode, playerId);
    newCardCount = dal.movePile(gameCode, 'TABLE', playerId)
  }
  return {
    snapped,
    snapBy: playerId,
    newCardCount
  }
}

module.exports = {
  cardsMatch,
  snap
}
