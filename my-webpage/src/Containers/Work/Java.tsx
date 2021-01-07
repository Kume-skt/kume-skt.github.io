import React from "react";
import { css } from "emotion";

const java_css = css({
  marginLeft: "10px",
  backgroundColor: "#ffff",
  width: "600px",
});
const java_main_css = css({
  margin: "20px",

  dt: { marginTop: "30px" },
  dd: { marginTop: "10px" },
});

function Java_skill() {
  return (
    <div className={java_css}>
      <div className={java_main_css}>
        <h2>Java</h2>
        <p>私のプログラミングを初めて最初に触ったのが Java です。</p>
        <p>プログラミングの基本はすべてここ学びました！！</p>
        <h3>作ったもの</h3>
        <dl>
          <dt>広告自動close</dt>
          <dd>OpenCVでのテンプレートマッチングでのweb自動操作</dd>

          <dt>新たな分野を開拓</dt>
          <dd>
            Twitterの推薦機能に納得いかない。
            <br />{" "}
            新たな分野が気になるので芋ずる式にいいユーザを知りたいのでTwitterAPIで相互フォローの数で判定して推薦するプログラム
            <br />
            <a href="https://drive.google.com/file/d/1W-sW8jBZKP3xx_NF5Xz_UUQEcY76rnEa/view?usp=sharing">
              発表資料
            </a>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Java_skill;
