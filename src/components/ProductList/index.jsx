import React from "react";
import "./ProductList.css";
import products from "../../constants/products";
import { NavLink } from "react-router-dom";

const ProductList = props => (
  <>
    <h2>Hi, I am the list of products</h2>
    {products.map(item => (
      <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
    ))}
  </>
);

export default ProductList;
