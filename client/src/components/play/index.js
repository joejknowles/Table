import React from 'react';
import { connect } from 'react-redux';

import PlayCardButton from './playCardButton';
import '../../styles/Play.css';
import res from '../../resources/pages/play';

export const Play = ({ cardsRemaining }) => (
  <div className="App Play">
    <div className="deck">
      { cardsRemaining > 0 ?
          <PlayCardButton /> :
          <p className='no-cards-message'>
            { res.noCardsMessage }
          </p>
      }
    </div>
  </div>
);


export default connect(
  ({ cardsRemaining }) => ({ cardsRemaining })
)(Play);
