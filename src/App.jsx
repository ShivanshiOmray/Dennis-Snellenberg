import React from "react";
import HomePage from "./components/LandingPage/HomePage";
import Page2 from "./components/Page2/Page2";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <HomePage />
      <Page2 />
      <Footer />
    </div>
  );
};

export default App;
