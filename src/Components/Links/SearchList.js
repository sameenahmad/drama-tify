import React, { Component } from "react";
import star from "../Icons/star.png";
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  async fetchMovie() {
    const rawResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f8c35c5728caab4e51e98b4401cff240&query=${
        this.props.value
      }`
    );
    const response = await rawResponse.json();
    this.setState({ results: response.results},()=>console.log("State is", this.state.results))
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    return (
        <div className="movie-Container">
          <div className="header-movie-dashboard">
            <h2 style={{ color: "white" }}>
              {" "}
              Search Results for {this.props.value}
            </h2>
          </div>
          {this.state.results.map(item => {
            return (
              <React.Fragment>
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
                </div>
              </React.Fragment>
            );
          })}
        </div>
    );
  }
}

export default SearchList;
