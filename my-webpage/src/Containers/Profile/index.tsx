import React from "react";
import { css } from "emotion";
import Icon from "../../Component/img/my_icon.png";

function Profile() {
  return (
    <div>
      <div>
        <img src={Icon} alt="icon" />
      </div>
      <div>
        <h2>名前 : 粂田　司</h2>
        <p>東京電機大学院　未来科学研究科　情報メディア学専攻　</p>
        <h2>技術</h2>
      </div>
    </div>
  );
}

export default Profile;
