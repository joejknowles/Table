import React from 'react';
import { connect } from 'react-redux';

import Layout from '../layout';
import { tablePileTopCardSelector } from '../../reducers';

export const Table = ({ topCard }) => (
  <Layout>
    <div className="pile">
      { topCard ?
        <div className="card">
          { `${ topCard.rank } ${ topCard.suit }` }
        </div> : <div className="noCards" /> }
    </div>
  </Layout>
);

const mapStateToProps = (state) => ({
  topCard: tablePileTopCardSelector(state)
});

export default connect(mapStateToProps)(Table);
