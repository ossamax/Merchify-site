import React from "react";
import "./styles.css";
import MenProducts from "./MenProducts";
import Signup from "../home/signup/signup";


const Men = () => {
  return (
    <>
      <div className="hero_men">
        <div className="container">
          <h1>Men</h1>
        </div>
      </div>
      <div className="products_container">
        {MenProducts.map((item) => (
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

export default Men;
