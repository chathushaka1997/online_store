import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-3 bg-light">
      <div className="container">
        <span className="text-muted">Your Footer Content Here</span>
        <Link className="me-4" to={"/all-products"}>
          All Products
        </Link>
        <Link className="me-4" to={"/all-brands"}>
          All brands
        </Link>
        <Link className="me-4" to={"/add-brand"}>
          Add Brand
        </Link>
        <Link className="me-4" to={"/add-tag"}>
          Add Tag
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
