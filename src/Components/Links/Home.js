import React, { Component } from "react";
import Trending from "./Trending";
import SearchList from "./SearchList";
import search from "../Icons/search.png"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSearch = e => {
    this.setState({ value: this.state.value, show: false });
  };

  render() {
    return (
      <div>
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
          <SearchList value={this.state.value} />
        )}
      </div>
    );
  }
}

export default Home;
