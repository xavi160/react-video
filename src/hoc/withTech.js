import React from 'react';

const initialTech = {
  currentTime: 0,
  paused: true,
  duration: 1
};

export default function withTech(Component) {
  const wrapped = (props, { tech = initialTech }) => (
    tech ? <Component {...props} tech={tech} /> : null
  );
  wrapped.displayName = 'withTech()';
  wrapped.contextTypes = { tech: React.PropTypes.object };
  return wrapped;
}
