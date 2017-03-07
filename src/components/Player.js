import React from 'react';
import Tick from './Tick';
import ControlBar from './ControlBar';
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

  onEvent(type, event) {
    event.persist();
    this.setState((state) => stateReducer(state, {
      type,
      currentTime: event.target.currentTime
    }));
  }

  getCurrentTime() {
    if (this.state.playing) {
      const now = new Date();
      const { currentTime = 0, lastChange = now } = this.state;
      return (now.getTime() - lastChange.getTime()) / 1000.0 + currentTime;
    }
    return this.state.currentTime;
  }

  render() {
    const { nativeControls, ...realProps } = this.props;
    return (
      <div>
        <Tick milliseconds={200}>
          {() => (
            <ControlBar>
              The current time is {Math.floor(this.getCurrentTime())}
            </ControlBar>
          )}
        </Tick>
        <video {...realProps}
          controls={nativeControls}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onSeeking={this.onSeeking}
          onSeeked={this.onSeeked} />
      </div>
    );
  }
}

Player.propTypes = {
  starttime: React.PropTypes.number,
  nativeControls: React.PropTypes.bool
};
