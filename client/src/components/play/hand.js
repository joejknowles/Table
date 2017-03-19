import React from 'react';
import { connect } from 'react-redux';

import PlayablePile from './playablePile';
import StaticPile from './staticPile';
import NoCards from './noCards';

import { cardCountSelector } from '../../reducers';
import { myTurnSelector } from '../../selectors';

export const Hand = ({ cardCount, myTurn }) => {
  if (cardCount > 0) {
    return myTurn ? <PlayablePile /> : <StaticPile />;
  }
  return <NoCards />
};

const mapStateToProps = (state) => ({
  cardCount: cardCountSelector(state),
  myTurn: myTurnSelector(state)
});

export default connect(mapStateToProps)(Hand);
