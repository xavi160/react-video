import React from 'react';
import styled from 'styled-components';

import withTick from '../hoc/withTick';
import withTech from '../hoc/withTech';

import Clock from './Clock';
import SeekBar from './SeekBar';

const ControlBarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 40px;
  line-height: 40px;
`;

const ClockWithTick = withTick(
  200,
  ({ tech }) => !tech.paused,
  ({ tech }) => <Clock seconds={tech.currentTime} />
);

const SeekBarWithTick = withTick(
  200,
  ({ tech }) => !tech.paused,
  ({ tech }) => (
    <SeekBar
      currentTime={tech.currentTime}
      duration={tech.duration}
      onSeek={(time) => {
        tech.currentTime = time;
      }}
    />
  )
);

const ControlBar = ({ tech }) => (
  <ControlBarWrapper>
    <SeekBarWithTick tech={tech} />
    <ClockWithTick tech={tech} />
  </ControlBarWrapper>
);

ControlBar.propTypes = { tech: React.PropTypes.object.isRequired };

export default withTech(ControlBar);
