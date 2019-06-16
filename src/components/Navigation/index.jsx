import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav className={`${props.role}-nav`}>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>
  </nav>
);

export default Navigation;
