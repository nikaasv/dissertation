import React from "react";
import "./ProductList.css";
import products from "../../constants/products";
import ProductCard from "../ProductCard";

const ProductList = props => (
  <div className="products-container">
    {products.map(item => (
      <ProductCard product={item} />
    ))}
  </div>
);

export default ProductList;
