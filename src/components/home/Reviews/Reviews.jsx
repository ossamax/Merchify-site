import React from "react";
import "./styles.css";
import fullstar from "../../../images/star-full.svg";
import halfstar from "../../../images/star-half.svg";
import emptystar from "../../../images/star-empty.svg";
import backimg from "../../../images/reviews_white_back.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews_container">
          <div className="left_reviews">
            <div className="review">
              <div>
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={halfstar} alt="" />
                <img src={emptystar} alt="" />
              </div>
              <p>
                Love the merch! I bought two T-shirts and a mug and I'm super
                happy with them. The shirts are made from high quality cotton
                and the prints are of amazing quality as well. I use my mug
                every single day.
              </p>
              <span className="cust_name">Josh Stevens</span>
              <br />
              <span className="happy_cust">Happy Customer</span>
            </div>
            <div className="review">
              <div>
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={emptystar} alt="" />
              </div>
              <p>
                Exquisite print-on-demand!I have seen a lot of print-on-demand
                on the market but merchify is truly one of a kind. Importing
                products with Printful is super easy thanks to the great
                implementations of Merchify.
              </p>
              <span className="cust_name">Sarah Lin</span>
              <br />
              <span className="happy_cust">Print-on-demand guru</span>
            </div>
          </div>
          <div className="right_reviews">
            <div className="review diff_back">
              <div>
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={halfstar} alt="" />
              </div>
              <img src={backimg} alt="" className="backimg" />
              <p>
                Love the merch! I bought two T-shirts and a mug and I'm super
                happy with them. The shirts are made from high quality cotton
                and the prints are of amazing quality as well. I use my mug
                every single day.
              </p>
              <span className="cust_name">April Reeves</span>
              <br />
              <span className="happy_cust">Entrepreneur</span>
            </div>
            <div className="review ">
              <div>
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={halfstar} alt="" />
                <img src={emptystar} alt="" />
              </div>
              <p>
                I sell all the merch I design for my clients using Merchify
                because of their large range of products and easy to use
                Printful integration. The products are of great quality and they
                provide amazing support and fast shipping.
              </p>
              <span className="cust_name">Craig Roush</span>
              <br />
              <span className="happy_cust">Product Designer</span>
            </div>
          </div>
        </div>
        <div className="review_content">
          <h1>The customer reviews speak for themselves</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere
          </p>
          <button>Submit Your Review</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
