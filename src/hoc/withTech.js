import React from 'react';

export default function withTech(Component) {
  const wrapped = (props, { tech }) => (
    tech ? <Component {...props} tech={tech} /> : null
  );
  wrapped.displayName = 'withTech()';
  wrapped.contextTypes = { tech: React.PropTypes.object };
  return wrapped;
}
