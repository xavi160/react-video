import React from 'react';
import ReactDOM from 'react-dom';
import { ControlBar, Player } from './index';
import HTML5 from './techs/html5';

const Video = () => (
  <Player src="./small.mp4" tech={HTML5}>
    <ControlBar />
  </Player>
);

ReactDOM.render(<Video />, document.getElementById('wrapper'));
