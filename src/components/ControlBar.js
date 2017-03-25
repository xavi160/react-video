import React from 'react';
import styled from 'styled-components';

import withTick from '../hoc/withTick';
import withPlayerState from '../hoc/withPlayerState';

import Clock from './Clock';

const ControlBarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 40px;
  line-height: 40px;
`;

const ClockWithTick = withTick(
  200,
  (props) => props.playing,
  ({ now, currentTime, lastChange = now }) => {
    const seconds = currentTime + (now.getTime() - lastChange.getTime()) / 1000.0;
    return <Clock seconds={Math.max(0, seconds)} />;
  }
);

const ControlBar = ({ playerState, ...props }) => (
  <ControlBarWrapper {...props}>
    <ClockWithTick {...playerState} />
  </ControlBarWrapper>
);

ControlBar.propTypes = { playerState: React.PropTypes.object.isRequired };

export default withPlayerState(ControlBar);
