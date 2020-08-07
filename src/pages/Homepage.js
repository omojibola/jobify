import React from "react";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs/Jobs";

const Homepage = () => (
  <div>
    <Hero
      bigText='Search for Live jobs near you'
      smallText='Your job search Just got easier'
    />

    <Jobs />
  </div>
);

export default Homepage;
