import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../layout'
import Hand from './hand';
import { handSelector } from '../../reducers';
import res from '../../resources/pages/play';

export class Play extends Component {
  componentWillMount() {
    this.props.ensureConnected();
  }

  render() {
    return (
      <Layout>
        <div className="pile">
          { this.props.hand > 0 ?
              <Hand /> :
              <p className='no-cards-message'>
                { res.noCardsMessage }
              </p>
          }
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, { params: { gameCode } }) => ({
  hand: handSelector(state),
  clientType: state.clientType,
  gameCode
});

const mapDispatchToProps = (dispatch) => ({
  joinAsPlayer: (gameCode) => dispatch({ type: 'PLAYER_JOIN', gameCode })
});

const merge = ({ hand, clientType, gameCode }, { joinAsPlayer }) => {
  const ensureConnected = () => clientType ? null : joinAsPlayer(gameCode);
  return ({
    hand, ensureConnected
  });
};


export default connect(mapStateToProps, mapDispatchToProps, merge)(Play);
