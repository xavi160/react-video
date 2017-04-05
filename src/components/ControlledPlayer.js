import React from 'react';
import HTML5VideoTech from './HTML5VideoTech';

export default class ControlledPlayer extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.setTech = this.setTech.bind(this);
    this.holder = {};
  }

  getChildContext() {
    return this.holder;
  }

  selectTechComponent() {
    return HTML5VideoTech;
  }

  setTech(ref) {
    this.holder.tech = ref.tech;
  }

  render() {
    const { children, playerState, src } = this.props;
    const Tech = this.selectTechComponent();
    return (
      <div>
        {children}
        <Tech
          src={src}
          {...playerState}
          ref={this.setTech}
          onPlay={this.props.onPlay}
          onPause={this.props.onPause}
          onEnded={this.props.onEnded}
          onTimeUpdate={this.props.onTimeUpdate}
          onSeeked={this.props.onSeeked}
        />
      </div>
    );
  }
}

ControlledPlayer.propTypes = {
  children: React.PropTypes.node,
  playerState: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  src: React.PropTypes.string,
  onPlay: React.PropTypes.func,
  onPause: React.PropTypes.func,
  onEnded: React.PropTypes.func,
  onTimeUpdate: React.PropTypes.func,
  onSeeked: React.PropTypes.func
};

ControlledPlayer.childContextTypes = { tech: React.PropTypes.object };
