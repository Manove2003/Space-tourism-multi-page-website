// Home.jsx
import React from "react";
import Header from "../component/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main id="main" className="grid-container">
        <div className="text-content">
          <h1 className="uppercase subheading">So, you want to travel to</h1>
          <h1 className="ff-serif fs-900 text-white">Space</h1>
          <p className="text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we’ll give you a truly
            out-of-this-world experience!
          </p>
        </div>
        <div className="button-container">
          <button className="explore-button">Explore</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
