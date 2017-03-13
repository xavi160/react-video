import React from 'react';

export default function withPlayerState(Component) {
  const wrapped = (props, { playerState }) => (
    <Component {...props} playerState={playerState} />
  );
  wrapped.displayName = 'withPlayerState()';
  wrapped.contextTypes = { playerState: React.PropTypes.object.isRequired };
  return wrapped;
}
