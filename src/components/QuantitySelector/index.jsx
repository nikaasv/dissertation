import React from "react";
import "./QuantitySelector.css";

const ProductCard = ({ id, label, max = 10, type = "number" }) => (
  <div className="quantity-selector">
    {label && <label htmlFor={id}>{label}</label>}
    <input className="number" type={type} min={0} max={max} />
  </div>
);

export default ProductCard;
