import React from 'react';
import { connect } from 'react-redux';

import { tablePileTopCardSelector } from '../../reducers';

export const Table = ({ topCard }) => (
  <div className="pile">
    { topCard ?
      <div className="card">
        { `${ topCard.rank } ${ topCard.suit }` }
      </div> : null }
  </div>
);

const mapStateToProps = (state) => ({
  topCard: tablePileTopCardSelector(state)
});

export default connect(mapStateToProps)(Table);
