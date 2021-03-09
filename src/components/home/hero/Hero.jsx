import React from "react";
import "./styles.css";
import heroImg from "../../../images/HeroImg.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_content">
            <h4>Back In Stock</h4>
            <h1>Embroidered Merchify Backpack</h1>
            <button>Shoop Now</button>
          </div>
          <div className="hero_img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
