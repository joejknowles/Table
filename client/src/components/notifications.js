import React from 'react';
import { connect } from 'react-redux';
import { notificationSelector } from '../reducers';

export const Notifications = ({ notification }) => (
  notification ? <p>{ notification }</p> : null
);

const mapStateToProps = (state) => ({
  notification: notificationSelector(state)
});

export default connect(mapStateToProps)(Notifications);
