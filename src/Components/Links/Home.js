import React, { Component } from "react";
import Trending from "./Trending";
import SearchList from "./SearchList"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
this.state.show? <Trending/>: <SearchList/>
    return (
      <div>
    
          </div>
    );
  }
}

export default Home;
