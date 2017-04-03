import React from 'react';

export default class ControlledVideo extends React.Component {
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
    const { currentTime, paused, src } = this.props;
    const { video } = this;

    if (previousProps.src !== src) {
      video.source = src;
    }

    if (previousProps.paused !== paused) {
      video.paused = paused;
    }

    if (previousProps.currentTime !== currentTime) {
      video.currentTime = currentTime || 0;
    }
  }

  createTech(ref) {
    this.video = new this.props.tech(ref);
    this.context.techs.push(this.video);
  }

  render() {
    return <video controls ref={this.createTech} />;
  }
}

ControlledVideo.propTypes = {
  src: React.PropTypes.string,
  currentTime: React.PropTypes.number,
  tech: React.PropTypes.func.isRequired,
  paused: React.PropTypes.bool.isRequired
};

ControlledVideo.contextTypes = { techs: React.PropTypes.array };
