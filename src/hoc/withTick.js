import React from 'react';

export default function withTick(Component, milliseconds) {
  return class Tick extends React.Component {
    componentDidMount() {
      this.tickInterval = setInterval(this.forceUpdate.bind(this), milliseconds);
    }

    componentWillUnmount() {
      clearInterval(this.tickInterval);
    }

    render() {
      return <Component {...this.props}/>;
    }
  };
}
