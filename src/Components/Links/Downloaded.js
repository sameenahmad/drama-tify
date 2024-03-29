import React, { Component } from "react";
import ls from "local-storage";
import star from "../Icons/star.png";
class Downloaded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloaded: []
    };
  }
  async getDownloaded() {
    const downloaded = ls.get("downloaded");
    this.setState({ downloaded: downloaded || [] });
  }

  componentDidMount() {
    this.getDownloaded();
  }
  handleDelete = ind => {
    const downloaded = ls.get("downloaded");
    if (window.confirm("Delete the item?")) {
      downloaded.splice(ind, 1);
      this.setState({ downloaded: downloaded }, () => {
        ls.set("downloaded", downloaded);
      });
    }
  };
  render() {
    return (
      <div className="movie-Container">
        <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}> Downloaded Movies</h2>
        </div>
        {this.state.downloaded.map((item, index) => {
          return (
            <div
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

export default Downloaded;
