import React, { Component } from "react";
import search from "./Icons/search.png";
import star from "./Icons/star.png";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  handleSearch = e => {
    this.setState({ search: this.state.search });
    console.log(this.state.search);
    this.fetchMovie();
  };
  async fetchMovie() {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f8c35c5728caab4e51e98b4401cff240&query=${
        this.state.search
      }`
    );
    const response = await rawResponse.json();
    this.setState({ results: response.results });
  }

  render() {
    return (
      <div className="search-Container">
        <input
          type="text"
          placeholder="Search by Title"
          className="search-Bar"
          value={this.state.search}
          onChange={this.handleChange}
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
