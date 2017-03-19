import React from 'react';
import res from '../../resources/pages/play';

export default () => (
  <div className='pile'>
    <div className="noCards">
        <p className='no-cards-message'>
          { res.noCardsMessage }
        </p>
    </div>
  </div>
);
