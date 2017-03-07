import React from 'react';

export default class Tick extends React.Component {

  setInterval(milliseconds) {
    this.tickInterval = setInterval(this.forceUpdate.bind(this), milliseconds);
  }

  clearInterval() {
    clearInterval(this.tickInterval);
  }

  componentDidMount() {
    this.setInterval(this.props.milliseconds);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.milliseconds !== newProps.milliseconds) {
      this.clearInterval();
      this.setInterval(newProps.milliseconds);
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  render() {
    return this.props.children() || null;
  }
}

Tick.propTypes = {
  children: React.PropTypes.func.isRequired,
  milliseconds: React.PropTypes.number.isRequired
};
