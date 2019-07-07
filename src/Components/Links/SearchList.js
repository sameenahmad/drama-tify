import React, { Component } from "react";
import star from "../Icons/star.png";
import collection from "../Icons/collection.png";
import downloaded from "../Icons/downloaded.png";
import todownload from "../Icons/todownload.png";
import watched from "../Icons/watched.png";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import ls from "local-storage";

class SearchList extends Component {
  constructor(props) {
    super(props);
    const collection = ls.get("collection");
    const downloaded = ls.get("downloaded");
    const todownload = ls.get("todownload");
    const watched = ls.get("watched");

    this.state = {
      collection: collection,
      downloaded: downloaded,
      todownload: todownload,
      watched: watched
    };
  }

  createNotification = (type, action) => {
    return () => {
      switch (type) {
        case "success":
          NotificationManager.success(
            `Successfully Added to ${action}`,
            "",
            2000
          );
          console.log("Name is", action);
          break;
      }
    };
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
        } else ls.set("downloaded", this.state.downloaded);
        break;
      //Save to Todownload

      case "todownload":
        if (!this.state.todownload.includes(item)) {
          const currentStateTodownload = this.state.todownload.slice(0);
          const newStateTodownload = [...currentStateTodownload, item];
          this.setState({ todownload: newStateTodownload }, () =>
            ls.set("todownload", this.state.todownload)
          );
        } else ls.set("todownload", this.state.todownload);
        break;
      //Save to watched

      case "watched":
        if (!this.state.watched.includes(item)) {
          const currentStateWatched = this.state.watched.slice(0);
          const newStateWatched = [...currentStateWatched, item];
          this.setState({ watched: newStateWatched }, () =>
            ls.set("watched", this.state.watched)
          );
        } else ls.set("watched", this.state.watched);
        break;
    }
  };

  render() {
    return (
      <div className="movie-Container">
        <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}>
            {" "}
            Search Results for {this.props.value}
          </h2>
          <NotificationContainer />
        </div>
        {this.props.results.map(item => {
          return (
            <div
              className="all-Movie-Item"
              id="title-Container"
              style={{
                width: "90%",
                alignSelf: "flex-start",
                marginTop: "1rem"
              }}
            >
              <img
                src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                style={{ width: "60px", height: "80px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem"
                }}
              >
                <h4 style={{ color: "white" }}>{item.title}</h4>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.5rem"
                  }}
                >
                  <img
                    style={{
                      marginRight: "0.4rem",
                      width: "20px",
                      height: "20px"
                    }}
                    src={star}
                  />
                  {item.vote_average}
                </span>
                <p style={{ marginTop: "0.5rem" }}>{item.overview}</p>
              </div>
              <div
                className="all-Movie-Item"
                id="title-Container"
                style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
              >
                <button
                  className="btn-Success"
                  onClick={this.createNotification("success", "Collection")}
                >
                  {" "}
                  <img
                    src={collection}
                    title="Collection"
                    onClick={this.handleClick.bind(this, "collection", item)}
                  />{" "}
                </button>
                <button
                  className="btn-Success"
                  onClick={this.createNotification("success", "Downloaded")}
                >
                  <img
                    src={downloaded}
                    title="Downloaded"
                    onClick={this.handleClick.bind(this, "downloaded", item)}
                  />{" "}
                </button>
                <button
                  className="btn-Success"
                  onClick={this.createNotification("success", "Todownload")}
                >
                  <img
                    src={todownload}
                    title="To Download"
                    onClick={this.handleClick.bind(this, "todownload", item)}
                  />{" "}
                </button>
                <button
                  className="btn-Success"
                  onClick={this.createNotification("success", "Watched")}
                >
                  <img
                    src={watched}
                    title="Watched"
                    onClick={this.handleClick.bind(this, "watched", item)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchList;
