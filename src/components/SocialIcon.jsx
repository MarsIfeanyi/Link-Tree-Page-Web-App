import React from "react";
import { githubIcon, slackIcon } from "../assets";

const SocialIcon = () => {
  return (
    <div className="socialStyle">
      <img src={slackIcon} alt="slackIcon" />

      <img src={githubIcon} alt="githubIcon" />
    </div>
  );
};

export default SocialIcon;
