import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { Footer } from "./components";

const App = () => {
  return (
    <div className="bg-white container md:max-w-6xl items-center mx-auto w-[90%]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
