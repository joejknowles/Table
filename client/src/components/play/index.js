import React from 'react';
import { connect } from 'react-redux';

import Hand from './hand';
import { handSelector } from '../../reducers';
import '../../styles/Play.css';
import res from '../../resources/pages/play';

export const Play = ({ hand }) => (
  <div className="App Play">
    <div className="deck">
      { hand > 0 ?
          <Hand /> :
          <p className='no-cards-message'>
            { res.noCardsMessage }
          </p>
      }
    </div>
  </div>
);


export default connect(
  (state) => ({ hand: handSelector(state) })
)(Play);
