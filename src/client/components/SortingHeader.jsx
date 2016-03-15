import React from 'react';

export default class SortingHeader extends React.Component {
  render() {
    return (
        <a className="col-xs-4" onClick={() => this.props.onSort(this.props.sortKey)}>
          <strong>{this.props.title}</strong>
        </a>
    );
  }
}
