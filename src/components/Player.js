import React from 'react';
import stateReducer, { PLAY, PAUSE, SEEKING, SEEKED } from '../state';
import ControlledPlayer from './ControlledPlayer';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateReducer({
      paused: true,
      currentTime: props.starttime || 0
    });
    this.onChange = this.onChange.bind(this);
    this.onPlay = this.onEvent.bind(this, PLAY);
    this.onPause = this.onEvent.bind(this, PAUSE);
    this.onSeeking = this.onEvent.bind(this, SEEKING);
    this.onSeeked = this.onEvent.bind(this, SEEKED);
  }

  getChildContext() {
    return { playerState: this.state };
  }

  onChange(action) {
    console.log(this, action);
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
    return (
      <ControlledPlayer
        {...this.props}
        playerState={this.state}
        onChange={this.onChange}
        onPlay={this.onPlay}
        onPause={this.onPause}
        onSeeking={this.onSeeking}
        onSeeked={this.onSeeked}
        onEnded={this.onPause}
      />
    );
  }
}

Player.propTypes = {
  children: React.PropTypes.node,
  starttime: React.PropTypes.number,
  nativeControls: React.PropTypes.bool
};

Player.childContextTypes = { playerState: React.PropTypes.object.isRequired };
