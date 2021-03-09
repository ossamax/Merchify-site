import React, { useState } from "react";
import "./styles.css";
import "../../GlobalStyles.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [Active, setActive] = useState(false);
  const open = () => {
    console.log("clicked");
    setActive(!Active);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Merche logo" />
        </div>
        <form className="search_bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search_icon" />
        </form>
        <div className="shopping_bag_container">
          <FiShoppingBag className="shopping_bag_icon" />
          <span className="number_of_items">1</span>
        </div>
        <div
          className={Active ? "Bars_icon active" : "Bars_icon"}
          onClick={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={Active ? "container_nav active" : "container_nav"}
        onClick={open}
      >
        <div className="navigations_links">
          <NavLink exact to="/" activClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/Men" activClassName="active">
            Men
          </NavLink>
          <NavLink exact to="/Women" activClassName="active">
            Women
          </NavLink>
          <NavLink exact to="/Kids" activClassName="active">
            Kids
          </NavLink>
          <NavLink exact to="/HomeLiving" activClassName="active">
            Home & Living
          </NavLink>
          <NavLink exact to="/Wallart" activClassName="active">
            Wall Art
          </NavLink>
          <NavLink exact to="/Ecofriendly" activClassName="active">
            Eco-Friendly
          </NavLink>
          <NavLink exact to="/Gifts" activClassName="active">
            Gifts
          </NavLink>
          <NavLink exact to="/Accessories" activClassName="active">
            Accessories
          </NavLink>
          <NavLink exact to="/Blog" activClassName="active">
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
