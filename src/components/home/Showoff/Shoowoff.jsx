import React from "react";
import { Link } from "react-router-dom";
import Clothingimg from "../../../images/Clothing.png";
import Wallart from "../../../images/wallart.png";
import Gifts from "../../../images/gift.png";
import Table from "../../../images/Table.png";
import "./styles.css";

const Shoowoff = () => {
  return (
    <>
      <div className="show">
        <div className="container">
          <Link to="/clothing">
            <div className="Show_clothing">
              <h1>
                Clothing<span>.</span>
              </h1>
              <img src={Clothingimg} alt="" />
            </div>
          </Link>
          <Link to="/Wallart">
            <div className="Show_clothing">
              <h1>
                Wall Art<span>.</span>
              </h1>
              <img src={Wallart} alt="" />
            </div>
          </Link>
          <Link to="/Gifts">
            <div className="Show_clothing">
              <h1>
                Gifts<span>.</span>
              </h1>
              <img src={Gifts} alt="" />
            </div>
          </Link>
          <Link to="/HomeLiving">
            <div className="Show_clothing">
              <h1>
                Home & Living<span>.</span>
              </h1>
              <img src={Table} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Shoowoff;
