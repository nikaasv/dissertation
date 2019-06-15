import React from "react";
import "./Product.css";
import products from "../../constants/products";
import { NavLink } from "react-router-dom";

const Product = props => {
  const { id } = props.match.params;
  const product = products.find(elem => elem.id === +id);

  return (
    <>
      <NavLink to="/products">Back</NavLink>
      <h1>Product #{id}</h1>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {product.img && <img src={product.img} />}
    </>
  );
};

export default Product;
