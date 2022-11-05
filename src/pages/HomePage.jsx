import React from "react";

import {
  BackgroundChecks,
  DesignBooks,
  Footer,
  Profile,
  PythonBooks,
  SlackName,
  SocialIcon,
  TwitterName,
  ZuriBooks,
  ZuriTeam,
} from "../components";

import ContactMe from "../components/ContactMe";

const HomePage = () => {
  return (
    <div>
      <Profile />
      <TwitterName />
      <SlackName />

      <ZuriTeam />
      <ZuriBooks />
      <PythonBooks />
      <BackgroundChecks />
      <DesignBooks />
      <ContactMe />

      <SocialIcon />
    </div>
  );
};

export default HomePage;
