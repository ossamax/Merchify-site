import React from "react";
import "./styles.css";
import AccessoriesProducts from "./AccessoriesProducts";
import Signup from "../home/signup/signup";

const Accessories = () => {
  return (
    <>
      <div className="hero_men">
        <div className="container">
          <h1>Accessories</h1>
        </div>
      </div>
      <div className="products_container">
        {AccessoriesProducts.map((item) => (
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

export default Accessories;
