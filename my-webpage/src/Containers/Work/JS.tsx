import React from "react";
import { css } from "emotion";
import webpage from "../../Component/img/webpage.png";
import plant from "../../Component/img/plant.png";

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
          <dt>コロナで入館記録付けるのが大変！</dt>
          <dd>
            入館記録をつけて後で提出、忘れがちなのでNFCを利用して記録を自動でつける！
            <br />
            <a href="https://www.youtube.com/watch?v=N71q6fX6mUU">動作動画</a>
          </dd>

          <dt>初めてのWEBサイト</dt>
          <dd>
            学部1年生の時のWEBサイト
            <br />
            <img src={webpage} alt="webpage" />
          </dd>
          <dt>Reactでのセンシングを可視化！</dt>
          <dd>
            {/* <img src={mysql} alt="mysql"/>
            <img src={rt} alt="mysql"/>
            <img src={python} alt="mysql"/> */}
            react　python　mysql 使用して作成。VARI、飽差などを可視化 <br />
            植物の世話が楽しくなるように
            <br />
            <img src={plant} alt="plant" />
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default Js;
