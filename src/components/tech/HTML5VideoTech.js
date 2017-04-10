import React from 'react';
import HTML5MediaInterface from './HTML5MediaInterface';

export default class HTML5VideoTech extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createTech = this.createTech.bind(this);
  }

  componentDidMount() {
    this.syncTech();
  }

  componentDidUpdate(previousProps) {
    this.syncTech(previousProps);
  }

  syncTech(previousProps = {}) {
    const { currentTime, muted, paused, src, volume } = this.props;
    const { tech } = this;

    tech.paused = paused;
    tech.volume = volume;
    tech.muted = muted;

    if (previousProps.src !== src) {
      tech.source = src;
    }

    if (previousProps.currentTime !== currentTime) {
      tech.currentTime = currentTime || 0;
    }
  }

  createTech(ref) {
    this.tech = new HTML5MediaInterface(ref);
  }

  render() {
    return (
      <video
        controls
        ref={this.createTech}
        onPlay={this.props.onPlay}
        onPause={this.props.onPause}
        onEnded={this.props.onEnded}
        onTimeUpdate={this.props.onTimeUpdate}
        onSeeked={this.props.onSeeked}
        onVolumeChange={this.props.onVolumeChange}
      />
    );
  }
}

HTML5VideoTech.propTypes = {
  src: React.PropTypes.string,
  currentTime: React.PropTypes.number,
  paused: React.PropTypes.bool,
  volume: React.PropTypes.number,
  muted: React.PropTypes.bool,
  onPlay: React.PropTypes.func,
  onPause: React.PropTypes.func,
  onEnded: React.PropTypes.func,
  onTimeUpdate: React.PropTypes.func,
  onSeeked: React.PropTypes.func,
  onVolumeChange: React.PropTypes.func
};
