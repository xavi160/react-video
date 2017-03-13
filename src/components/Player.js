import React from 'react';
import stateReducer, { PLAY, PAUSE, SEEKING, SEEKED } from '../state';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateReducer({
      playing: false,
      currentTime: props.starttime || 0
    });
    this.onPlay = this.onEvent.bind(this, PLAY);
    this.onPause = this.onEvent.bind(this, PAUSE);
    this.onSeeking = this.onEvent.bind(this, SEEKING);
    this.onSeeked = this.onEvent.bind(this, SEEKED);
  }

  getChildContext() {
    return { playerState: this.state };
  }

  onEvent(type, event) {
    event.persist();
    this.setState((state) =>
      stateReducer(state, {
        type,
        currentTime: event.target.currentTime
      }));
  }

  render() {
    const { children, nativeControls, ...realProps } = this.props;
    return (
      <div>
        {children}
        <video
          {...realProps}
          controls={nativeControls}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onSeeking={this.onSeeking}
          onSeeked={this.onSeeked}
        />
      </div>
    );
  }
}

Player.propTypes = {
  children: React.PropTypes.node,
  starttime: React.PropTypes.number,
  nativeControls: React.PropTypes.bool
};

Player.childContextTypes = { playerState: React.PropTypes.object.isRequired };
