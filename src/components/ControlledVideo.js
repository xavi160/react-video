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
    const { tech } = this;

    if (previousProps.src !== src) {
      tech.source = src;
    }

    if (previousProps.paused !== paused) {
      tech.paused = paused;
    }

    if (previousProps.currentTime !== currentTime) {
      tech.currentTime = currentTime || 0;
    }
  }

  createTech(ref) {
    this.tech = new this.props.tech(ref);
    this.context.setTech(this.tech);
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

ControlledVideo.contextTypes = { setTech: React.PropTypes.func.isRequired };
