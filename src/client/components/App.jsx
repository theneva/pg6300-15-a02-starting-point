import React from 'react';

import FilterControl from './FilterControl.jsx';
import SortingHeader from './SortingHeader.jsx';
import Album from './Album.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      sortKey: 'artist',
    };

    this.filterItems = this.filterItems.bind(this);
    this.setSortKey = this.setSortKey.bind(this);
  }

  filterItems(text) {
    this.setState({
      // force to lower case to match everything
      filter: text.toLowerCase()
    });
  }

  filterAlbumsIgnoreCase(album, filter) {
    return album.title.toLowerCase().includes(this.state.filter)
        || album.artist.toLowerCase().includes(this.state.filter)
        || album.year.includes(this.state.filter);
  }

  setSortKey(key) {
    this.setState({
      sortKey: key,
    });
  }

  render() {
    return (
        <div className="container">
          <h1>Albums</h1>
          <FilterControl onFilter={filter => this.filterItems(filter)}/>
          <div>
            <SortingHeader sortKey="title" title="Title" onSort={this.setSortKey}/>
            <SortingHeader sortKey="artist" title="Artist" onSort={this.setSortKey}/>
            <SortingHeader sortKey="year" title="Year" onSort={this.setSortKey}/>
          </div>
          {this.props.albums
              .filter(album => this.filterAlbumsIgnoreCase(album, this.state.filter))
              .sort((left, right) => left[this.state.sortKey].localeCompare(right[this.state.sortKey]))
              .map((album, index) => <Album key={index} {...album}/>)}
        </div>
    );
  }
}
