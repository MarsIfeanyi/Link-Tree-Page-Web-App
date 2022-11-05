import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="sectionContainer bgStyle textStyle">
      {/* <a href="/contact" id="contact">
        Contact Me
      </a> */}

      <Link to="/contact" id="contact">
        Contact Me
      </Link>
    </div>
  );
};

export default ContactMe;
