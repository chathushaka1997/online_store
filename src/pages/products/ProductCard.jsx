import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div key={product?._id} className="col-6 col-md-4 col-lg-3 product-container">
      <Link to={`/product/${product?._id}`}>
        <div className="sub-container">
          <img className="" src={product?.images?.displayUrl || product?.images?.tumbnailUrl} alt={product?.title} />
          <div className="details-container p-2">
            <p className="title text-truncate">{product?.title}</p>
            <p className="price fw-bold">Rs {product?.price?.toLocaleString()}</p>
            <span className="ratings">
              ★★★★★ <span className="text-secondary">(24)</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
