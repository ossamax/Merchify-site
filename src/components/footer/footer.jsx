import React from "react";
import "./styles.css";
import logo from "../../images/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";



const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo_social_media_links">
          <img src={logo} alt="" />
          <p>
            Easily set up a beautiful print-on-demand business in minutes with
            Merchify.
          </p>
          <div className="social_media_icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="navigation">
          <h1>Navigation</h1>
          <a href="/Aboutus">About us</a>
          <a href="/FAQ">FAQ</a>
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <div>
            <FaLocationArrow />
            3880 Braxton Street Chicago,
            <br /> il 60606 United States
          </div>
          <div>
            <FiMail />
            company@domain.com
          </div>
          <div>
            <FaPhoneAlt />
            815-515-2603
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
