import React from "react";
import "./styles.css";
import securepayment from "../../../images/securepayments.svg";
import worldwideshipping from "../../../images/worldwideshipping.svg";
import friendlysupport from "../../../images/friendly_support.svg";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div>
            <img src={worldwideshipping} alt="" />
            <h1>Worldwide Shipping</h1>
            <p>
              All our orders ship from various warehouses to ensure fast
              shipping times all over the world.
            </p>
          </div>
          <div>
            <img src={securepayment} alt="" />
            <h1>Secure Payments</h1>
            <p>
              pay with full confidence thanks to our secure and encrypted
              payment methods
            </p>
          </div>
          <div>
            <img src={friendlysupport} alt="" />
            <h1>Friendly Support</h1>
            <p>
              Got a question? Contact our friendly support staff and they'll get
              back to you as soon as possible
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
