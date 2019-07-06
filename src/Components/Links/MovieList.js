import React, { Component } from "react";
import collection from "../Icons/collection.png";
import downloaded from "../Icons/downloaded.png";
import todownload from "../Icons/todownload.png";
import watched from "../Icons/watched.png";
import star from "../Icons/star.png";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.results.map(item => {
      return (
        <div className="all-Movie-Container">
          <div className="all-Movie-Item" id="title-Container">
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
              className="tooltip"
            >
              <h4>{item.title}</h4>
              <span className="tooltiptext">{item.overview}</span>
            </div>
          </div>
          <p
            className="all-Movie-Item"
            id="title-Container"
            style={{ justifyContent: "Center", fontWeight: "bold" }}
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
          </p>
          <div
            className="all-Movie-Item"
            id="title-Container"
            style={{ justifyContent: "Center" }}
          >
            <img
              src={collection}
              title="Collection"
              onClick={this.props.handleClick.bind(this, "collection", item)}
            />{" "}
            <img
              src={downloaded}
              title="Downloaded"
              onClick={this.props.handleClick.bind(this, "downloaded",item)}
            />{" "}
            <img
              src={todownload}
              title="To Download"
              onClick={this.props.handleClick.bind(this, "todownload",item)}
            />{" "}
            <img
              src={watched}
              title="Watched"
              onClick={this.props.handleClick.bind(this, "watched", item)}
            />
          </div>
        </div>
      );
    });
  }
}

export default MovieList;
