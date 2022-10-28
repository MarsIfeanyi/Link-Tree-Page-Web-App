import React from "react";

import { marsIfeanyi, shareButton } from "../assets";

const Profile = () => {
  return (
    <div
      id="profile__img"
      className="sectionContainer mt-10  bg-white space-y-4 py-4 relative"
    >
      <div className="flex flex-row">
        <img
          src={marsIfeanyi}
          alt="profile-Image"
          className="w-36 ring-2 rounded-full ring-Gray900"
        />

        <img
          src={shareButton}
          alt="shareButton-Icon"
          className="absolute top-5 right-10 md:right-52 md:w-16 "
        />
      </div>

      <h1>Marcellus Ifeanyi</h1>
    </div>
  );
};

export default Profile;
