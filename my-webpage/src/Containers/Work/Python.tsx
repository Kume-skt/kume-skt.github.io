import React from "react";
import { css } from "emotion";

const python_css = css({
  marginLeft: "10px",
  backgroundColor: "#ffff",
  width: "600px",
});
const python_main_css = css({
  margin: "20px",

  dt: { marginTop: "30px" },
  dd: { marginTop: "10px" },
});

function Python() {
  return (
    <div className={python_css}>
      <div className={python_main_css}>
        <h2>Python</h2>
        <p>非常に簡単に書くことができて気に入っています。</p>
        <p>
          データ解析、アプリケーションのプロトタイプを作成するのに使ってます。
        </p>
        <h3>成果物で使ったもの</h3>
        <dl>
          <dt>Flask</dt>
          <dd>
            WEBAPIなど素早く作れます。
            <br />
            植物監査、コロナ入退館などで使用しています。
          </dd>
          <dt>RTK-GNSSのデータ解析</dt>
          <dd>
            私の研究で作成しているアプリケーションです。
            <br />
            機械学習で補正するなど様々なことを試しています。
            <br />
          </dd>
          <dt>TwitterAPIライブラリ開発</dt>
          <dd>
            新たな言語に挑戦するとき過去に自分の作成したアプリケーションを
            <br />
            別言語でリメイクします。<br />
                      必要なモジュールをインストールしますが、私の環境下でTwitterのモジュールが動作しなかったので自作しました。
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default Python;
