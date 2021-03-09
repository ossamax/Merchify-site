import React from "react";
import Hero from "./hero/Hero";
import Latestblog from "./latestblog/latestblog";
import LatestProduct from "./latestproducts/latestproducts";
import Product from "./products/Product";
import Reviews from "./Reviews/Reviews";
import Services from "./services/services";
import Shoowoff from "./Showoff/Shoowoff";
import Signup from "./signup/signup";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Shoowoff />
      <Reviews />
      <LatestProduct />
      <Latestblog />
      <Services />
      <Signup />
    </>
  );
};

export default Home;
