import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsCardContainer = ({ products }) => {
  return <div className="row">{products && products.map((product) => <ProductCard product={product} key={product?._id} />)}</div>;
};

export default ProductsCardContainer;
