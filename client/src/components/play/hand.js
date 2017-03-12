import React from 'react';
import { connect } from 'react-redux';

import PlayCardButton from './playCardButton';

import { myTurnSelector } from '../../selectors';

export const Hand = ({ myTurn }) => (
  <div className='card'>
    { myTurn && <PlayCardButton /> }
  </div>
);

const mapStateToProps = (state) => ({
  myTurn: myTurnSelector(state)
});

export default connect(mapStateToProps)(Hand);
