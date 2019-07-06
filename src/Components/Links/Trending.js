import React, { Component } from "react";


class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      genres: []
    };
  }
  componentDidMount() {
    (async () => {
      const rawResponse = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=f8c35c5728caab4e51e98b4401cff240"
      );
      const genreResponse = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f8c35c5728caab4e51e98b4401cff240&language=en-US"
      );
      const genre = await genreResponse.json();
      const response = await rawResponse.json();
      const { results } = response;
      // const newArr = results.slice(0,8);
      this.setState({ results: results, genres: genre.genres });
    })();
  }

  render() {
    return (
      <div className='movie-Container' >
        <div className="header-movie-dashboard">
          <h2 style={{ color: "white" }}> Trending Movies</h2>
        
        </div>
        <div className="poster-Container">
          {this.state.results.map(e => (
            <div className="poster-Item">
              <img
                className="imgTag"
                src={`http://image.tmdb.org/t/p/w185/${e.poster_path}`}
              />
              <button className="rating-Btn"> {e.vote_average}</button>
              <h3>{e.title}</h3>

              {e.genre_ids.map(id => {
                return this.state.genres.map(item => {
                  return item.id == id ? <span>{item.name} </span> : "";
                });
              })}
            </div>
          ))}
        </div>
      </div >
    );
  }
}

export default Trending;
