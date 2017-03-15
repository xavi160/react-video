import React from 'react';

export default function withTick(milliseconds, condition, Component) {
  return class Tick extends React.Component {

    constructor() {
      super();
      this.state = { now: new Date() };
    }

    componentDidMount() {
      this.tickInterval = setInterval(
        () => condition(this.props) && this.tick(),
        milliseconds
      );
    }

    componentWillUnmount() {
      clearInterval(this.tickInterval);
    }

    tick() {
      this.setState({ now: new Date() });
    }

    render() {
      return <Component {...this.props} now={this.state.now}/>;
    }
  };
}
