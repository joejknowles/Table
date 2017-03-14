import React from 'react';
import { connect } from 'react-redux';

import PlayCardButton from './playCardButton';
import res from '../../resources/pages/play';

import { myTurnSelector } from '../../selectors';
import { cardCountSelector } from '../../reducers';

export const Hand = ({ myTurn, cardCount }) => (
  <div className="pile">
    { cardCount > 0 ?
      <div className='card'>
        { myTurn && <PlayCardButton /> }
      </div> :
      <p className='no-cards-message'>
        { res.noCardsMessage }
      </p>
    }
  </div>
);

const mapStateToProps = (state) => ({
  cardCount: cardCountSelector(state),
  myTurn: myTurnSelector(state)
});

export default connect(mapStateToProps)(Hand);
