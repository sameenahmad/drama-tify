import React, { Component } from "react";
import collection from "./Icons/collection.png";
import downloaded from "./Icons/downloaded.png";
import todownload from "./Icons/todownload.png";
import watched from "./Icons/watched.png";
import all from "./Icons/all.png";
import { Link } from "react-router-dom";

class FeatureList extends Component {
  state = {};
  render() {
    return (
      <div className="feature-Container">
        <ul className="featureList">
          <Link style={{ textDecoration: "none", color: "#6e7880" }} to="/all">
            {" "}
            <li>
              <img src={all} />
              All
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/collection"
          >
            <li>
              <img src={collection} />
              My Collection
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/downloaded"
          >
            <li>
              <img src={downloaded} />
              Downloaded
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/todownload"
          >
            <li>
              <img src={todownload} />
              To Download
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/watched"
          >
            <li>
              {" "}
              <img src={watched} /> Watched
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default FeatureList;
