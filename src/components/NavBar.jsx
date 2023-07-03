import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-between p-3 navlinks-container" >
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>All Products</Link>
      </div>
    </div>
  );
};

export default NavBar;
