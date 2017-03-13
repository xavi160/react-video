import React from 'react';
import ReactDOM from 'react-dom';
import { ControlBar, Player } from './index';

const Video = () => (
  <Player src="./small.mp4" nativeControls>
    <ControlBar />
  </Player>
);

ReactDOM.render(<Video />, document.getElementById('wrapper'));
