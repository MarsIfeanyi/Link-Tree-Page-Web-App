import React from "react";

import { marsIfeanyi, shareButton, shareButton2 } from "../assets";

const Profile = () => {
  return (
    <div
      id="profile__img"
      className="container items-center justify-center mx-auto my-8 flex flex-col bg-white mt-10  space-y-4 py-4 relative"
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
          className="absolute hidden md:flex top-5 right-44 w-16 "
        />

        <img
          src={shareButton2}
          alt="shareButton-Icon2"
          className="absolute md:hidden top-5 right-5 w-12 "
        />
      </div>

      <h1>Marcellus Ifeanyi</h1>
    </div>
  );
};

export default Profile;
