import React from "react";
import "./Products.css";
import { Route } from "react-router-dom";
import Product from "../Product";
import ProductList from "../../components/ProductList";

const Products = props => (
  <>
    <h1>Products</h1>
    <Route path="/products" exact component={ProductList} />
    <Route path="/products/:id" exact component={Product} />
  </>
);

export default Products;
