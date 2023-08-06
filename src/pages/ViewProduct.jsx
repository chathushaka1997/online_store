import React from "react";
import { useParams } from "react-router-dom";
import useViewProduct from "../customHooks/useViewProduct";

const ViewProduct = () => {
  let { id } = useParams();
  const [product] = useViewProduct(id);
  console.log(product);
  return (
    <div className="container mt-5">
      <h1>Product</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={product?.images?.displayUrl || product?.images?.mediumUrl} alt={product?.title} />
        </div>
        <div className="col-12 col-md-6">
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
