import React from 'react';
import ReactDOM from 'react-dom';
import HTML5Video from './components/ControlledHTML5Video';
import SeekBar from './components/SeekBar';
import Clock from './components/Clock';
import withTick from './hoc/withTick';

const UpdateableBar = withTick(
  200,
  ({ facade }) => true || !facade.paused,
  ({ facade }) => (
    <div>
      <div>
        <Clock seconds={facade.currentTime} />
      </div>
      <div>
        <SeekBar
          currentTime={facade.currentTime}
          duration={facade.duration}
          onSeek={(time) => {
            facade.currentTime = time;
          }}
        />
      </div>
    </div>
  )
);

class Video extends React.Component {
  constructor() {
    super();
    this.facades = [];
    this.state = {
      paused: true,
      currentTime: 0
    };
  }

  getChildContext() {
    return { facades: this.facades };
  }

  togglePlaying() {
    this.setState((state) => ({
      ...state,
      paused: !state.paused
    }));
  }

  onTimeChange(event) {
    const { value } = event.target;
    if (value) {
      this.setCurrentTime(parseFloat(value));
    }
  }

  setCurrentTime(currentTime) {
    this.setState({ currentTime });
  }

  render() {
    const [facade] = this.facades;
    return (
      <div>
        <div>
          <button onClick={this.togglePlaying.bind(this)}>Play / Pause</button>
          <input
            placeholder="Current time"
            onChange={this.onTimeChange.bind(this)}
          />
          {facade && <UpdateableBar facade={facade} />}
        </div>
        <HTML5Video
          src="./small.mp4"
          paused={this.state.paused}
          currentTime={this.state.currentTime}
        />
      </div>
    );
  }
}

Video.childContextTypes = { facades: React.PropTypes.array.isRequired };

ReactDOM.render(<Video />, document.getElementById('wrapper'));
