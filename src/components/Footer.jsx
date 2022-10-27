import React from "react";

import { ZuriIntLogo, I4GLogo } from "../assets";

const Footer = () => {
  return (
    <div className="footerStyle">
      <img src={ZuriIntLogo} alt="Zuri-Internship-Logo" />

      <p className="text-Gray500 font-inter">HNG Internship 9 Frontend Task</p>

      <img src={I4GLogo} alt="I4G-Logo" />
    </div>
  );
};

export default Footer;
