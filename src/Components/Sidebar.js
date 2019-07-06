import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopRated from "./Links/TopRated";
import Collection from "./Links/Collection";
import Downloaded from "./Links/Downloaded";
import Todownload from "./Links/Todownload";
import Watched from "./Links/Watched";
import collection from "./Icons/collection.png";
import downloaded from "./Icons/downloaded.png";
import todownload from "./Icons/todownload.png";
import watched from "./Icons/watched.png";
import all from "./Icons/all.png";
import ProfileAvatar from "./ProfileAvatar";
import Trending from "./Links/Trending";
import home from "./Icons/home.png";
import Home from "./Links/Home";

const routes = [
  {
    exact: true,
    path: "/",
    sidebar: () => <div />,
    main: () => <Home />
  },
  {
    exact: true,
    path: "/popular",
    sidebar: () => <div />,
    main: () => <Trending />
  },
  {
    path: "/toprated",
    exact: true,
    sidebar: () => <div />,
    main: () => <TopRated />
  },
  {
    path: "/collection",
    sidebar: () => <div />,
    main: () => <Collection />
  },
  {
    path: "/downloaded",
    sidebar: () => <div />,
    main: () => <Downloaded />
  },
  {
    path: "/todownload",
    sidebar: () => <div />,
    main: () => <Todownload />
  },
  {
    path: "/watched",
    sidebar: () => <div />,
    main: () => <Watched />
  }
];

function SidebarExample() {
  return (
    <Router>
      <div className="feature-Container">
        <ul className="featureList">
          <Link to="/">
            <li>
              <ProfileAvatar />
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/popular"
          >
            <li>
              <img src={home} />
              Trending
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#6e7880" }}
            to="/toprated"
          >
            {" "}
            <li>
              <img src={all} />
              Top Rated
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

        {routes.map((route, index) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </Router>
  );
}

export default SidebarExample;
