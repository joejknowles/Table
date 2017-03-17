import React from 'react';
import { connect } from 'react-redux';

import res from '../../resources/pages/play';

import { cardCountSelector } from '../../reducers';

export const CardCount = ({ count }) => (
  <div className="card-count">
    { res.cardCount(count) }
  </div>
);

const mapStateToProps = (state) => ({
  count: cardCountSelector(state)
});

export default connect(mapStateToProps)(CardCount);
