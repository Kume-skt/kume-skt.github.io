import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";

function Navbar() {
  const nav_css = css({
    width: "100%",
      height: "4em",
      backgroundColor:"#30ffb3",
      display: "flax",
  });
  const link_css = css({
    margin: "20px",
    fontSize: "1.5em",
    color: "black",
      textDecoration: "none",
      ":hover": {
        backgroundColor:"#28c78c",
      
      }
    
  });

  return (
    <div className={nav_css}>
      <div>
        <Link to="/" className={link_css}>
          home
        </Link>
      </div>
      <div>
        <Link to="/test" className={link_css}>
          test
        </Link>
      </div>
      <div>
        <Link to="/" className={link_css}>
          home
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
