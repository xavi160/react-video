import React from 'react';
import styled from 'styled-components';

const SeekHolder = styled.div`
  width: 100%;
  height: 5px;
  background-color: #BBB;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.currentValue}%;
  height: 100%;
  background-color: #44c7ff;
  cursor: inherit;
`;

export default class SeekBar extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = { dragging: false };
  }

  onMouseDown() {
    this.setState({ dragging: true });
  }

  onMouseUp() {
    this.setState({ dragging: false });
  }

  onMouseMove(event) {
    if (this.props.onSeek && this.state.dragging) {
      this.onSeek(event);
    }
  }

  onClick(event) {
    this.onSeek(event);
  }

  onSeek(event) {
    event.persist();
    const { duration } = this.props;
    const { clientX, currentTarget } = event;
    this.props.onSeek(
      (clientX - currentTarget.offsetLeft) *
        duration /
        currentTarget.clientWidth
    );
  }

  render() {
    return (
      <SeekHolder
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        onClick={this.onClick}
      >
        <ProgressBar
          currentValue={this.props.currentTime * 100.0 / this.props.duration}
        />
      </SeekHolder>
    );
  }
}

SeekBar.propTypes = {
  onSeek: React.PropTypes.func,
  currentTime: React.PropTypes.number.isRequired,
  duration: React.PropTypes.number.isRequired
};
