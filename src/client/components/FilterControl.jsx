import React from 'react';

export default class FilterControl extends React.Component {
  render() {
    return (
        <div>
          <label>
            Filter items by name, artist, or title
            <input className="form-control"
                   onChange={e => this.props.onFilter(e.target.value)}
                   placeholder="Filter items…"/>
          </label>
        </div>
    )
  }
}
