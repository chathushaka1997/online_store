import React from "react";
import { Link, useParams } from "react-router-dom";
import useViewProduct from "../../customHooks/useViewProduct";
import "./ViewProduct.css";
import useFilterProducts from "../../customHooks/useFilterProducts";
import ProductsCardContainer from "../products/ProductsCardContainer";

const ViewProduct = () => {
  let { id } = useParams();
  const [product] = useViewProduct(id);
  const [products] = useFilterProducts();
  return (
    <div className="container mt-4 view-product-container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product Details
          </li>
        </ol>
      </nav>
      <div className="">
        <span className="title">{product?.title}</span>
        <br />
        Brand : <span className="text-primary">{product?.brand?.name}</span>
        <span className="ratings ms-3">
          ★★★★★ <span className="text-secondary">(24)</span>
        </span>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={product?.images?.displayUrl || product?.images?.mediumUrl} alt={product?.title} className="image" />
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-2">
            <span className="price">Rs {product?.price?.toLocaleString()}</span>
            <span className="ms-3 strike-price">
              <s>Rs {(product?.price + 1000)?.toLocaleString()}</s>
            </span>
          </div>
          <p className="description">{product?.description}</p>
          <ul className="features">
            <li>Colour : Misty Grey</li>
            <li>Thickness : 220 GSM</li>
            <li>Size Range : XS – XXL</li>
            <li>Quality Standards : 100% QC Passed. Export Ready.</li>
            <li>Specialities : Tagless. Comfortable. Excellent Colorfastness. Anti-Shrink. </li>
          </ul>
          <button className="btn btn-primary button mb-3">Add to Cart</button>
          <br />
          <span className="category">
            Category: <span>{product?.category?.name}</span>
          </span>
          <br />
          <div className="mt-1">
            <span className="tags">
              Tags:{" "}
              {product?.tags?.map((tag) => (
                <span className="">{tag?.name}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="mb-5" style={{ color: "#3498db" }}>
        <h3 className="mt-5">Recommended for You</h3>
        <hr />
        <ProductsCardContainer products={products?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default ViewProduct;
