import React from "react";
import { css } from "emotion";
interface topic_type {
  title: string;
  script: string;
  urltitle: string;
  url: string;
}

const topic_css = css({
  dt: { marginTop: "30px" },
  dd: { marginTop: "10px" },
});

function Topic({
  script = "本文",
  title = "タイトル",
  url = "",
  urltitle = "",
}: topic_type) {
  return (
    <dl className={topic_css}>
      <dt>{title}</dt>
      <dd>
        {script}
        <br />
        {url != "" ? <a href={url}>{urltitle}</a> : null}
      </dd>
    </dl>
  );
}

export default Topic;
