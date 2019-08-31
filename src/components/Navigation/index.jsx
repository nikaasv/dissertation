import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import MS from "../../assets/images/MS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navigation = props => (
  <>
    <nav className={`${props.function}-nav desktop`}>
      <NavLink className="nav-logo" to="/" exact>
        <img className="logo" src={MS} alt="logo" />
      </NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/products">Products</NavLink>
      <FontAwesomeIcon className="nav-icon" icon={faShoppingBag} />
    </nav>
    <nav className={`${props.function}-nav mobile`}>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/products">Products</NavLink>
        </ul>
      </div>
    </nav>
  </>
);

export default Navigation;
