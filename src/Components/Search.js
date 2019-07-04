import React, { Component } from "react";
import search from "./Icons/search.png";
class Search extends Component {
  state = { toggleSearch: false };
  handleSearch = e => {
    this.setState({ toggleSearch: !this.state.toggleSearch });
    console.log(this.state.toggleSearch);
  };
  render() {
    return this.state.toggleSearch ? (
      <button className="search-Btn" onClick={this.handleSearch}>
        <img src={search} />
      </button>
    ) : (
      <div className="search-Container">
        <input
          type="text"
          placeholder="Search by Title"
          className="search-Bar"
        />
        <img
          src={search}
          style={{ padding: "0.6rem 0.5rem" }}
          onClick={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;
