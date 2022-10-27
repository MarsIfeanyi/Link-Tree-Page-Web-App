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
      <header>
        <Profile />
        <TwitterName />
        <SlackName />
      </header>
      <main>
        <ZuriTeam />
        <ZuriBooks />
        <PythonBooks />
        <BackgroundChecks />
        <DesignBooks />
      </main>
      <footer>
        <SocialIcon />
        <Footer />
      </footer>
    </div>
  );
};

export default App;
