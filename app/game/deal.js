const shuffle = require('lodash.shuffle');

module.exports = (deck, playerCount) => {
  const shuffledDeck = shuffle(deck);
  const piles = [];
  for (let player = 0; player < playerCount; player++) {
    piles.push([]);
  }
  let pileId = 0;
  deck.forEach((card) => {
    piles[pileId].push(card);
    pileId++;
    if (pileId >= playerCount) pileId = 0;
  });
  return piles;
};
