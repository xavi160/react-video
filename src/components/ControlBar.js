import React from 'react';
import styled from 'styled-components';

import withTick from '../hoc/withTick';
import withPlayerState from '../hoc/withPlayerState';

const ControlBarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 40px;
  line-height: 40px;
`;

const padClockUnit = (unit) => (unit < 10 ? '0' : '') + unit;

const formatTimeInterval = (milliseconds) => {
  const interval = Math.floor(milliseconds);
  const seconds = interval % 60;
  const minutes = Math.floor(interval / 60) % 60;
  const hours = Math.floor(interval / 3600);
  if (hours > 0) {
    return `${hours}:${padClockUnit(minutes)}:${padClockUnit(seconds)}`;
  }
  return `${padClockUnit(minutes)}:${padClockUnit(seconds)}`;
};

function getCurrentTime({ currentTime, lastChange, playing }) {
  if (playing) {
    const now = new Date();
    return (now.getTime() - lastChange.getTime()) / 1000.0 + currentTime;
  }
  return currentTime;
}

const ControlBar = (props) => (
  <ControlBarWrapper {...props}>
    The current time is {formatTimeInterval(getCurrentTime(props.playerState))}
  </ControlBarWrapper>
);

ControlBar.propTypes = { playerState: React.PropTypes.object.isRequired };

export default withTick(withPlayerState(ControlBar), 200);
