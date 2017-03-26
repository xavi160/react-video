import React from 'react';

export default class VideoSource extends React.Component {
  render() {
    return <video {...this.props} />;
  }
}
