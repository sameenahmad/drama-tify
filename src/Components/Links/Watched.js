import React, { Component } from "react";
import ls from "local-storage";
import star from "../Icons/star.png";
class Watched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: []
    };
  }
  async getWatched() {
    const watched = ls.get("watched");
    this.setState({ watched: watched });
  }

  componentDidMount() {
    this.getWatched();
  }
  handleDelete = ind => {
    const watched = ls.get("watched");
    if (window.confirm("Delete the item?")) {
      watched.splice(ind, 1);
      this.setState({ watched: watched }, () => {
        ls.set("watched", watched);
      });
    }
  };
  render() {
    return (
      <div className="movie-Container">
        <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}> Watched Movies</h2>
        </div>
        {this.state.watched.map((item, index) => {
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
                <p>Release Date: {item.release_date}</p>
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
              <button
                onClick={this.handleDelete.bind(this, index)}
                className="remove-Btn"
              >
                {" "}
                X
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Watched;
