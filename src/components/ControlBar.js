import React from 'react';
import styled from 'styled-components';

const ControlBarWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 40px;
  line-height: 40px;
`;

const ControlBar = (props) => <ControlBarWrapper {...props}/>;
export default ControlBar;
