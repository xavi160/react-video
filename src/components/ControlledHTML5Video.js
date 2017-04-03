import React from 'react';
import HTML5VideoFacade from '../facades/html5';

export default class ControlledHTML5Video extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.createFacade = this.createFacade.bind(this);
  }

  componentDidMount() {
    this.syncFacade();
  }

  componentDidUpdate(previousProps) {
    this.syncFacade(previousProps);
  }

  syncFacade(previousProps = {}) {
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

  createFacade(ref) {
    this.video = new HTML5VideoFacade(ref);
    this.context.facades.push(this.video);
  }

  render() {
    return <video controls ref={this.createFacade} />;
  }
}

ControlledHTML5Video.propTypes = {
  src: React.PropTypes.string,
  currentTime: React.PropTypes.number,
  paused: React.PropTypes.bool.isRequired
};

ControlledHTML5Video.contextTypes = { facades: React.PropTypes.array };
