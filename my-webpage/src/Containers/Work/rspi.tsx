import React from "react";
import { css } from "emotion";

const aws_css = css({
  marginLeft: "10px",
  backgroundColor: "#ffff",
  width: "600px",
});
const aws_main_css = css({
  margin: "20px",

  dt: { marginTop: "30px" },
  dd: { marginTop: "10px" },
});

function RasPi() {
  return (
    <div className={aws_css}>
      <div className={aws_main_css}>
        <h2>ラズベリーパイ</h2>
        <p>サーバの勉強やIotなどの組み合わせて使用しています</p>
        <dl>
          <dt>react</dt>
          <dd>
            Apache、Nginxなどを使用してWEBページ作ってセンサーの稼働状況を確認する
          </dd>
          <dt>OSがあるからいろんな言語で開発できる</dt>
          <dd>
            Python、Nodejs様々な言語で開発することができます。
            <br />
            証明書やAWSなどの通信の時は、マイコンではできない処理をこちらでやらせることで複雑なシステムを作成できます。
            <br />
            ローカル環境でテストで動かして作成していくときなど便利です。<br />
             また、ノグロークなどと組み合わせることで一時的にグローバルな開発も可能
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default RasPi;
