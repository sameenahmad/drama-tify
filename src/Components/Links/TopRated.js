import React, { Component } from "react";
import Pagination from "react-js-pagination";
import MovieList from "./MovieList";
import ls from "local-storage";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class Allmovies extends Component {
  constructor(props) {
    super(props);
    const collection = ls.get("collection");
    const downloaded = ls.get("downloaded");
    const todownload = ls.get("todownload");
    const watched = ls.get("watched");

    this.state = {
      activePage: 1,
      results: [],
      collection: collection,
      downloaded: downloaded,
      todownload: todownload,
      watched: watched
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
          const currentState = this.state.collection.slice(0);
          const newStateCollection = [...currentState, item];
          this.setState({ collection: newStateCollection }, () =>
            ls.set("collection", this.state.collection)
          );
        } else ls.set("collection", this.state.collection);
        break;

      // Save to Downloaded
      case "downloaded":
        if (!this.state.downloaded.includes(item)) {
          const currentStateDownloaded = this.state.downloaded.slice(0);
          const newStateDownloaded = [...currentStateDownloaded, item];
          this.setState({ downloaded: newStateDownloaded }, () =>
            ls.set("downloaded", this.state.downloaded)
          );
        }
        else ls.set("downloaded", this.state.downloaded);
        break;
      //Save to Todownload

      case "todownload":
        if (!this.state.todownload.includes(item)) {
          const currentStateTodownload = this.state.todownload.slice(0);
          const newStateTodownload = [...currentStateTodownload, item];
          this.setState({ todownload: newStateTodownload }, () =>
            ls.set("todownload", this.state.todownload)
          );
        }
        else ls.set("todownload", this.state.todownload);
        break;
      //Save to watched

      case "watched":
        if (!this.state.watched.includes(item)) {
          const currentStateWatched = this.state.watched.slice(0);
          const newStateWatched = [...currentStateWatched, item];
          this.setState({ watched: newStateWatched }, () =>
            ls.set("watched", this.state.watched)
          );
        }
        else ls.set("watched", this.state.watched);
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="movie-Container">
          <div className="header-movie-dashboard">
            <h2 style={{ color: "white" }}> Top Rated Movies</h2>
            <NotificationContainer />
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
