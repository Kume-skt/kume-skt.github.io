import React, { useState } from "react";
import { css } from "emotion";
const skill = css({
  display: "inline-block",
  textAlign: "left",
  width: "850px",
});
const liststyle = css({
  display: "block",
  listStyle: "none",
  textAlign: "center",
  width: "200pX",
  height: "100vh",
  backgroundColor: "#ffffff",
});

const listStyle_li = css({
  height: "2em",
  width: "90%",
  textAlign: "left",
  color: "black",
  margin: "10px",
  borderBottom: "1px solid #b6b6b6",
  ":hover": {
    backgroundColor: "#ffffff",
    color: "#009688",
  },
});
function Work() {
  const [selectskill, setsklii] = useState("");

  return (
    <div className={skill}>
      <div className={liststyle}>
        <div className={listStyle_li}>Java</div>
        <div className={listStyle_li}>JavaScript, TypeScript</div>
        <div className={listStyle_li}>Python</div>
        <div className={listStyle_li}>AWS</div>
        <div className={listStyle_li}>ESP32</div>
        <div className={listStyle_li}>ラズベリーパイ</div>
      </div>
    </div>
  );
}

export default Work;
