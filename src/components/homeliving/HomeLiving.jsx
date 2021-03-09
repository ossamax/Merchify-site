import React from "react";
import "./styles.css";
import HomeProducts from "./HomeProducts";
import Signup from "../home/signup/signup";

const HomeLiving = () => {
  return (
    <>
      <div className="hero_men">
        <div className="container">
          <h1>Home & Living</h1>
        </div>
      </div>
      <div className="products_container">
        {HomeProducts.map((item) => (
          <div className="product">
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>View Product</button>
          </div>
        ))}
      </div>
      <Signup />

    </>
  );
};

export default HomeLiving;
