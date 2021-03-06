const suits = [ 'HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS' ];
const pictureRanks = {
  1: 'A',
  11: 'J',
  12: 'Q',
  13: 'K'
};
const isPictureCard = (rankNo) => pictureRanks.hasOwnProperty(rankNo);

const deck = [];
for (let suitNo = 0; suitNo < 4; suitNo++) {
  const suit = suits[suitNo];
  for (let rankNo = 1; rankNo < 14; rankNo++) {
    let rank;
    if (isPictureCard(rankNo)) {
      rank = pictureRanks[rankNo];
    } else {
      rank = rankNo.toString();
    }
    const card = {
      id: rankNo + (suitNo * 13),
      suit,
      rank,
      img: `cards/${ rank }-${ suit }.svg`
    };
    deck.push(card);
  }
}

const allSnapsDeck = [
  {id: 1, suit: 'HEARTS', rank: 'A'},
  {id: 2, suit: 'HEARTS', rank: 'A'},
  {id: 3, suit: 'HEARTS', rank: 'A'},
  {id: 4, suit: 'HEARTS', rank: 'A'},
  {id: 5, suit: 'HEARTS', rank: 'A'},
]

//module.exports = allSnapsDeck;
module.exports = deck;
