import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "emotion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Containers/Navber";
import Profile from "./Containers/Profile";
import Work from "./Containers/Work";

const base = css({
  textAlign: "center",
  display: "block",
  backgroundColor: "#e3e7e8",
});
const mainpage = css({
  maxWidth: "850px",
  display:"inline",
  textAlign: "center",
  match: "auto"
});

function App() {
  return (
    <div className={base}>
      <Router>
        <header>
          <Nav />
        </header>
        <div className={mainpage}>
          <Route exact path="/" component={Profile} />
          <Route path="/work" component={Work} />
        </div>
      </Router>
    </div>
  );
}

export default App;
