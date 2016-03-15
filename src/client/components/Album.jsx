import React from 'react';

export default class Album extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col-xs-4">{this.props.title}</div>
          <div className="col-xs-4">{this.props.artist}</div>
          <div className="col-xs-4">{this.props.year}</div>
        </div>
    );
  }
}
