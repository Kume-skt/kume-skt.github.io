import React from "react";
import { css } from "emotion";

const js_css = css({
  marginLeft: "10px",
  backgroundColor: "#ffff",
  width: "600px",
});
const js_main_css = css({
  margin: "20px",

  dt: { marginTop: "30px" },
  dd: { marginTop: "10px" },
});

function Js() {
  return (
    <div className={js_css}>
      <div className={js_main_css}>
              <h2>JavaScript</h2>
              <p>優れたシステム作れてもつかってもらうUIが無いと使ってもらえない！</p>
              <p>だから僕は、フロントを頑張っている！</p>
              <h2>作ったもの</h2>
              <dl>
                  <dt>初めてのWEBサイト</dt>
                  <dd>学部1年生の時のWEBサイト<br />
                  
                  </dd>
</dl>
      </div>
    </div>
  );
}
export default Js;
