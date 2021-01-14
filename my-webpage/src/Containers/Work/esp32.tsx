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

function Esp32() {
  return (
    <div className={aws_css}>
      <div className={aws_main_css}>
        <h2>ESP32</h2>
        <p>
          Iot センサー系は、ほぼESP32を使用しています。
          <br />
          また、WioLTEやアルディーノなども扱うことができます。
        </p>
        <dl>
          <dt>Uart</dt>
          <dd>
            通信が不安定になる場では、Uartでの指示を出したりします。
            また、情報も同様にして取得することができます。
          </dd>
          <dt>ラズベリーパイとの組み合わせ</dt>
          <dd>
            ラズベリーパイは、OSを搭載したコンピューターでIot、教育などで使用されています。
            <br />
            AWSIotCore
            などと組み合わせることで外部と通信し状況を知らせ適切に処理することができます
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default Esp32;
