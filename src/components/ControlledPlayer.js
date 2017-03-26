import React from 'react';
import VideoSource from './VideoSource';

export default class Player extends React.Component {
  render() {
    const { children, nativeControls, playerState, ...realProps } = this.props;
    return (
      <div>
        {children}
        <VideoSource
          {...realProps}
          playerState={playerState}
          controls={nativeControls}
        />
      </div>
    );
  }
}

Player.propTypes = {
  children: React.PropTypes.node,
  playerState: React.PropTypes.object.isRequired,
  nativeControls: React.PropTypes.bool
};
