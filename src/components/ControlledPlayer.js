import React from 'react';
import ControlledVideo from './ControlledVideo';

export default class ControlledPlayer extends React.Component {

  getChildContext() {
    return {
      setTech: (tech) => {
        this.tech = tech;
      }
    };
  }

  render() {
    const activeTech = this.tech;
    const { children, playerState, src, tech } = this.props;
    return (
      <div>
        {children}
        <ControlledVideo src={src} tech={tech} {...playerState} />
      </div>
    );
  }
}

ControlledPlayer.propTypes = {
  children: React.PropTypes.node,
  playerState: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.object.isRequired,
  src: React.PropTypes.string,
  tech: React.PropTypes.func.isRequired,
  nativeControls: React.PropTypes.bool
};

ControlledPlayer.childContextTypes = { setTech: React.PropTypes.func.isRequired };
