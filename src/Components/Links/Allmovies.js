import React, { Component } from "react";
import Search from "../Search";
import Pagination from "react-js-pagination";
import MovieList from "./MovieList";
import ls from "local-storage";

class Allmovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      results: [],
      collection: [],
      downloaded: [],
      todownload: [],
      watched: []
    };
  }
  async fetchData(page) {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f8c35c5728caab4e51e98b4401cff240&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    const response = await rawResponse.json();
    this.setState({ results: response.results });
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.fetchData();
  }

  handlePageChange = pageNumber => {
    this.setState(
      {
        activePage: pageNumber
      },
      () => {
        this.fetchData(pageNumber);
      }
    );
  };
  handleClick = (action, item) => {
    switch (action) {
      // Save to local Storage Collection
      case "collection":
        if (!this.state.collection.includes(item)) {
          this.state.collection.push(item);
          console.log("New Collection State", this.state.collection);
          ls.set("collection", this.state.collection);
        } else console.log("item already exists ");
        break;

      // Save to Downloaded
      case "downloaded":
        if (!this.state.downloaded.includes(item)) {
          this.state.downloaded.push(item);
          console.log("New Downloaded State", this.state.downloaded);
          ls.set("downloaded", this.state.downloaded);
        } else console.log("item already exists ");
        break;
      //Save to Todownload

      case "todownload":
        if (!this.state.todownload.includes(item)) {
          this.state.todownload.push(item);
          console.log("New todownload State", this.state.todownload);
          ls.set("todownload", this.state.todownload);
        } else console.log("item already exists ");

        break;
      //Save to watched

      case "watched":
        if (!this.state.watched.includes(item)) {
          this.state.watched.push(item);
          console.log("New watched State", this.state.watched);
          ls.set("watched", this.state.watched);
        } else console.log("item already exists ");

        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="movie-Container">
          <div className="header-movie-dashboard">
            <h2 style={{ color: "white" }}> Top Rated Movies</h2>
            <Search />
          </div>
          <div className="heading-Allmovies">
            <h3> Title</h3>
            <h4> Rating</h4>
            <h4>Shortlist</h4>
          </div>
        </div>
        <MovieList
          results={this.state.results}
          handleClick={this.handleClick}
        />

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={20}
          totalItemsCount={250}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Allmovies;
