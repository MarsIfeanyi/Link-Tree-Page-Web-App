import React from "react";
import { githubIcon, slackIcon } from "../assets";

const SocialIcon = () => {
  return (
    <div className="socialStyle">
      <img src={slackIcon} alt="slackIcon" className="w-8" />

      <img src={githubIcon} alt="githubIcon" className="w-8" />
    </div>
  );
};

export default SocialIcon;
