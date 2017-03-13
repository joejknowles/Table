const suits = [ 'HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS' ];
const pictureRanks = {
  1: 'A',
  11: 'J',
  12: 'Q',
  13: 'k'
};
const deck = [];
for (let suitNo = 0; suitNo < 4; suitNo++) {
  const suit = suits[suitNo];

  for (let rankNo = 1; rankNo < 14; rankNo++) {
    let rank;
    if (pictureRanks.hasOwnProperty(rankNo)) {
      rank = pictureRanks[rankNo];
    } else {
      rank = rankNo.toString();
    }
    const card = {
      id: rankNo + (suitNo * 13),
      suit: suit,
      ranks: rank
    };
    deck.push(card);
  }
}

module.exports = deck;
