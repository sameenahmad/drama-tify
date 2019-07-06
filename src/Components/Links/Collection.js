import React, { Component } from "react";
import ls from "local-storage";
import star from "../Icons/star.png";
class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  }
  async getCollection() {
    const collection = ls.get("collection");
    this.setState({ collection: collection  });
  }

  componentDidMount() {
    this.getCollection();
  }
  render() {
    return (
      <React.Fragment>
        <div className="movie-Container">
          <div className="header-movie-dashboard">
            <h2 style={{ color: "white" }}> Your Collection</h2>
          </div>
          {this.state.collection.map(item => {
            return (
              <React.Fragment>
                <div
                  className="all-Movie-Item"
                  id="title-Container"
                  style={{ width: "90%", alignSelf: "flex-start", marginTop: '1rem' }}
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
                    <h4 style={{color:'white'}}>{item.title}</h4>
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
      </React.Fragment>
    );
  }
}

export default Collection;
