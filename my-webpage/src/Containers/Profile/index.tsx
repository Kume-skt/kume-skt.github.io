import React from "react";
import { css } from "emotion";
import Icon from "../../Component/img/my_icon.png";
import Skill from "../../Component/img/skill.png";

const css_home = css({
  display: "inline-block",
  textAlign: "left",
  maxWidth: "80%",
  backgroundColor: "#ffffff",
});
const css_space = css({
  marginLeft: "15px",
});

function Profile() {
  return (
    <div className={css_home}>
      <div className={css({ margin: "10%" })}>
        <div className={css({ textAlign: "center" })}>
          <img src={Icon} alt="icon" />
        </div>
        <div>
          <h2>Kumeta Tsukasa</h2>
          <div className={css_space}>
            <p>東京電機大学院　未来科学研究科　情報メディア学専攻</p>
          </div>
          <h2>SKILL</h2>
          <div className={css_space}>
            <img src={Skill} width="90%" alt="skill_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
