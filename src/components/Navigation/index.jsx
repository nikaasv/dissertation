import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import MS from "../../assets/images/MS.png";

const Navigation = props => (
  <nav className={`${props.function}-nav`}>
    <NavLink className="nav-logo" to="/" exact>
      <img className="logo" src={MS} alt="logo" />
    </NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
    <NavLink to="/products">Products</NavLink>
  </nav>
);

export default Navigation;
