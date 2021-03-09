import React from "react";
import Latestblog from "../home/latestblog/latestblog";
import Signup from "../home/signup/signup";
import "./styles.css";

const Blog = () => {
  return (
    <>
      <div className="hero_blog">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
      <Latestblog />
      <Signup />
    </>
  );
};

export default Blog;
