import React, { useState } from "react";
import { css } from "emotion";
import Java from "./Java";
import Js from "./JS";
import Python from "./Python";
import AWS from "./aws";

const skillcss = css({
  display: "inline-block",
  textAlign: "left",
  Width: "850px",
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

enum skill_list {
  java = "JAVA",
  js = "JS",
  python = "PYTHON",
  aws = "AWS",
  esp = "ESP32",
  rspi = "RSPI",
}
function Work() {
  const [skill, setsklii] = useState(skill_list.java);
  var skill_view = <p></p>;
  switch (skill) {
    case skill_list.java:
      skill_view = <Java />;
      break;
    case skill_list.js:
      skill_view =  <Js/>;
      break;
    
    case skill_list.python:
      skill_view = <Python />;
      break;
    
    case skill_list.aws:
      skill_view = <AWS />;
      break;

    default:
      break;
  }
  return (
    <div className={skillcss}>
      <div className={css({ display: "flex" })}>
        <div className={liststyle}>
          <div
            className={listStyle_li}
            onClick={() => setsklii(skill_list.java)}
          >
            Java
          </div>
                  <div className={listStyle_li}
                    onClick={() => setsklii(skill_list.js)}
          
                  >JavaScript</div>
          <div className={listStyle_li} onClick={() => setsklii(skill_list.python)}>Python</div>
          <div className={listStyle_li}onClick={() => setsklii(skill_list.aws)}>AWS</div>
          <div className={listStyle_li}onClick={() => setsklii(skill_list.esp)} >ESP32</div>
          <div className={listStyle_li}onClick={() => setsklii(skill_list.rspi)} >ラズベリーパイ</div>
        </div>
        {skill_view}
      </div>
    </div>
  );
}

export default Work;
