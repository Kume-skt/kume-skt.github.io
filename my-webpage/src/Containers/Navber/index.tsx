import React from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";

function Navbar() {
  const nav_css = css({
    width: "100%",
    height: "4em",
    backgroundColor:"#ffff",
    borderBottom:"1px solid #d6d6d6",
    textAlign: "left",
  });

  const nav_main_css = css({
    width:"90%"
  })
  const link_list_css = css({
    display: "flex",
    justifyContent: "flex-end",
  });
  const link_css = css({
    margin: "20px",
    fontSize: "1.3em",
    color: "black",
    textDecoration: "none",
    ":hover": {
      color: "#009688",
    },
  });

  return (
    <div className={nav_css}>
      <div className={nav_main_css}>
        <div>
          <Link to="/" className={link_css}>
            KUMETA
          </Link>
        </div>

        <div className={link_list_css}>
          <div>
            <Link to="/" className={link_css}>
              ホーム
            </Link>
          </div>
          <div>
            <Link to="/work" className={link_css}>
              技術
            </Link>
          </div>
          <div>
            <Link to="/" className={link_css}>
              home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
