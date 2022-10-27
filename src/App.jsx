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
} from "./components";

const App = () => {
  return (
    <div className="bg-white container mx-auto">
      <Profile />
      <TwitterName />
      <SlackName />
      <ZuriTeam />
      <ZuriBooks />
      <PythonBooks />
      <BackgroundChecks />
      <DesignBooks />
      <SocialIcon />
      <Footer />
    </div>
  );
};

export default App;
