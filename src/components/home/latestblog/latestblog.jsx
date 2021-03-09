import React from "react";
import "./styles.css";
import howtosellimg from "../../../images/blogimages/howtosellimg.jpg";
import girlimg from "../../../images/blogimages/girl.jpg";
import { FaStar } from "react-icons/fa";

const Latestblog = () => {
  return (
    <>
      <div className="latestblog">
        <div className="container">
          <div className="header">
            <h1>Latest Blogs</h1>
          </div>
          <div className="blogs_container">
            <div>
              <span className="featured">
                <FaStar />
                Featured
              </span>
              <img
                src={howtosellimg}
                alt="image_ecommerce How to sell your merch using social media "
              />
              <p>
                September 23, 2020 <span>By</span> Kevin Dupont
              </p>
              <h3>How to sell your merch using social media</h3>
              <button>Read Article</button>
            </div>
            <div>
              <img
                src={girlimg}
                alt="image_ecommerce These are the 5 top selling products of 2020"
              />
              <p>
                September 23, 2020 <span>By</span> Julie Smith
              </p>
              <h3>These are the 5 top selling products of 2020</h3>
              <button>Read Article</button>
            </div>
          </div>
          <button className="viewall">View All Posts</button>
        </div>
      </div>
    </>
  );
};

export default Latestblog;
