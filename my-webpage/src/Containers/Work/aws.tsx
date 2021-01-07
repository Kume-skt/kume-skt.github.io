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

function Python() {
  return (
    <div className={aws_css}>
      <div className={aws_main_css}>
        <h2>AWS</h2>
        <p>サーバレスの勉強で使用しています。</p>
        <p>
          研究やアプリケーションなどの動かすのに使用しています。（現在は、動いていません）
        </p>
        <h3>主に使用している物</h3>
        <dl>
          <dt>cloud9</dt>
                  <dd>APIの作成に使用しています。主にpython、nodejs などでlambdaで動作するプログラムを書いています
          </dd>
                  <dt>AWS lambda</dt>
                  <dd>APIやAWS Iot　などデータの格納やデータベースのデータを引っ張って来るのに使用しています。</dd>
                  <dt>AWS Iot</dt>
                  <dd>Iotでは、Mqttという通信プロトコルを使用しています。</dd>
        </dl>
      </div>
    </div>
  );
}
export default Python;
