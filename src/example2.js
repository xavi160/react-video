import React from 'react';
import ReactDOM from 'react-dom';
import ControlledVideo from './components/ControlledVideo';
import SeekBar from './components/SeekBar';
import Clock from './components/Clock';
import withTick from './hoc/withTick';
import HTML5 from './techs/html5';

const UpdateableBar = withTick(
  200,
  ({ tech }) => true || !tech.paused,
  ({ tech }) => (
    <div>
      <div>
        <Clock seconds={tech.currentTime} />
      </div>
      <div>
        <SeekBar
          currentTime={tech.currentTime}
          duration={tech.duration}
          onSeek={(time) => {
            tech.currentTime = time;
          }}
        />
      </div>
    </div>
  )
);

class Video extends React.Component {
  constructor() {
    super();
    this.techs = [];
    this.state = {
      paused: true,
      currentTime: 0
    };
  }

  getChildContext() {
    return { techs: this.techs };
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
    const [tech] = this.techs;
    return (
      <div>
        <div>
          <button onClick={this.togglePlaying.bind(this)}>Play / Pause</button>
          <input
            placeholder="Current time"
            onChange={this.onTimeChange.bind(this)}
          />
          {tech && <UpdateableBar tech={tech} />}
        </div>
        <ControlledVideo
          {...this.state}
          tech={HTML5}
          src="./small.mp4"
        />
      </div>
    );
  }
}

Video.childContextTypes = { techs: React.PropTypes.array.isRequired };

ReactDOM.render(<Video />, document.getElementById('wrapper'));
