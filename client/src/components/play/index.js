import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../layout'
import Hand from './hand';
//import Snap from './snap';

export class Play extends Component {
  componentWillMount() {
    this.props.ensureConnected();
  }

  render() {
    return (
      <Layout>
        <Hand />
      </Layout>
    );
  }
}

const mapStateToProps = (state, { params: { gameCode } }) => ({
  clientType: state.clientType,
  gameCode
});

const mapDispatchToProps = (dispatch) => ({
  joinAsPlayer: (gameCode) => dispatch({ type: 'PLAYER_JOIN', gameCode })
});

const merge = ({ clientType, gameCode }, { joinAsPlayer }) => {
  const ensureConnected = () => clientType ? null : joinAsPlayer(gameCode);
  return ({
    ensureConnected
  });
};

export default connect(mapStateToProps, mapDispatchToProps, merge)(Play);
