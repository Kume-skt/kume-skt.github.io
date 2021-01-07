import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "emotion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Containers/Navber";
import Profile from "./Containers/Profile";

const base = css({
  textAlign: "center",
  display: "block",
  backgroundColor: "#e6e6e6",
});

function App() {
  return (
    <div className={base}>
      <Router>
        <header className="">
          <Nav />
        </header>
        <Route exact path="/" component={Profile} />
        <Route path="/test" component={() => <p>a</p>} />
      </Router>
    </div>
  );
}

export default App;
