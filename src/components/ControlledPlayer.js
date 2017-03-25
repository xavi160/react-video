import React from 'react';

export default class Player extends React.Component {

  render() {
    const { children, nativeControls, playerState, ...realProps } = this.props;
    return (
      <div>
        {children}
        <video {...realProps} controls={nativeControls} />
      </div>
    );
  }
}

Player.propTypes = {
  children: React.PropTypes.node,
  playerState: React.PropTypes.object.isRequired,
  nativeControls: React.PropTypes.bool
};
