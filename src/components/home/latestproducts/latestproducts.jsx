import React from "react";
import "./styles.css";
import ProductsData from "./ProductsData";

const LatestProduct = () => {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="header">
            <h1>Latest products</h1>
          </div>
          <div className="products_container">
            {ProductsData.map((item) => (
              <div className="product">
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>View Product</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
