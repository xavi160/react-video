import React from 'react';

const pad = (unit) => (unit < 10 ? '0' : '') + unit;

const Clock = (props) => {
  const interval = Math.floor(props.seconds);
  const seconds = interval % 60;
  const minutes = Math.floor(interval / 60) % 60;
  const hours = Math.floor(interval / 3600);
  if (hours > 0) {
    return <span>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>;
  }
  return <span>{pad(minutes)}:{pad(seconds)}</span>;
};

Clock.propTypes = { seconds: React.PropTypes.number.isRequired };

export default Clock;
