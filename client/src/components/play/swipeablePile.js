import React from 'react';
import { connect } from 'react-redux';
import Cards, { Card } from '../../lib/swipe-cards';
import { cardCountSelector } from '../../reducers';

const swipeableCard = (playCard) => (
  <Card
    onSwipeTop={ playCard }
    key='top'>
    <div className='face-down'/>
  </Card>
);

export const SwipeablePile = ({ playCard, cardCount }) => (
  <Cards className="pile">
    {
      cardCount > 1 ?
      [
      swipeableCard(playCard)
    ,
    <Card key='bottom' children={ <div className='face-down'/> } />
    ] : [
        swipeableCard(playCard)
      ]
    }
  </Cards>
);

const mapStateToProps = (state) => ({
  cardCount: cardCountSelector(state)
});

const mapDispatchToProps = (dispatch) => ({ playCard: () => dispatch({ type: 'PLAY_CARD' }) })

export default connect(mapStateToProps, mapDispatchToProps)(SwipeablePile);
