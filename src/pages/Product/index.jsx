import React from "react";
import "./Product.css";
import products from "../../constants/products";
import { NavLink } from "react-router-dom";

const Product = props => {
  const { id } = props.match.params;
  console.log(id);
  const product = products.find(elem => elem.id === id);

  return (
    <>
      <div className="product-container">
        {product.img && <img src={product.img} alt={product.description} />}
        <div className="product-content">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <NavLink className="size" to="/">
            Size 4
          </NavLink>
          <NavLink className="size" to="/">
            Size 5
          </NavLink>
          <NavLink className="size" to="/">
            Size 6
          </NavLink>

          <div className="button-container">
            <NavLink className="backButton" to="/products">
              Back
            </NavLink>
          </div>
        </div>
      </div>
      <div className="product-container-two">{product.details}</div>
    </>
  );
};

export default Product;
