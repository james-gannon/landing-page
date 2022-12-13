import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Download,
  Features,
  SectionWrapper,
  SectionWrapperVideo,
  Footer,
} from "./components";
import assets from "./assets/assets";
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

const App = () => {
  return (
    <div className="position: relative">
      {/*<nav className="flex items-center justify-between flex-wrap bg-black p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/" className="font-semibold text-xl tracking-tight">
              CashQuest
            </Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link
                to="/Features"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                About
              </Link>
              <Link
                to="/works"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
              >
                How it Works
              </Link>
            </div>
            <div>
              <Link
                to="/download"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </Link>
            </div>
          </div>
  </nav>*/}
      {/*<Map
          width={500}
          height={500}
          mapImageUrl={assets.javascript}
          className="map-container"
/>*/}

      <SectionWrapper
        title="Join the Quest"
        description="Test your skills on the largest IRL adventure gaming platform in the world."
        showBtn
        header
        mockupImg={assets.homeHero}
        banner="banner"
        className="position: sticky"
      />
      <SectionWrapper
        title="About"
        description="A first-of-its-kind mobile app that blends the 
        fun of outdoor exploration, education and friendly competition 
        with the opportunity to win huge cash prizes along the way.
        "
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="How it Works"
        description="Onboard funds, create a Quest, and search for the treasure. Or, join a Quest near you!
        "
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapperVideo
        title="Video Demo"
        description="A demonstration of CashQuest's MVP UI, including the capture of
        a randomly dropped treasure chest at a local beach."
        banner="banner02"
      />
      <Download />
      <Footer />
      <div className="px-4 py-2 justify-center items-center bg-black flex-col text-center">
        <p className="text-xs text-gray-400 py-2">
          Brought to you by {""}
          <span className="font-bold text-gray-100">Cache Kings Ltd.</span>,
          Copyright &copy; 2022
        </p>
      </div>
    </div>
  );
};

export default App;
