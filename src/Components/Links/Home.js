import React, { Component } from "react";
import Trending from "./Trending";
import SearchList from "./SearchList";
import search from "../Icons/search.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      value: "",
      results: []
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSearch = e => {
    this.state.value
      ? this.setState({ value: this.state.value, show: false }, () => {
          this.fetchMovie();
        })
      : window.location.reload();
  };
  async fetchMovie() {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f8c35c5728caab4e51e98b4401cff240&query=${
        this.state.value
      }`
    );
    const response = await rawResponse.json();
    this.setState({ results: response.results });
  }

  render() {
    return (
      <div className="movie-Container">
        <div className="search-Container">
          <input
            type="text"
            placeholder="Search by Title"
            className="search-Bar"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <img
            src={search}
            style={{ padding: "0.6rem 0.5rem" }}
            onClick={this.handleSearch}
          />
        </div>
        {this.state.show ? (
          <Trending />
        ) : (
          <SearchList results={this.state.results} />
        )}
      </div>
    );
  }
}

export default Home;
