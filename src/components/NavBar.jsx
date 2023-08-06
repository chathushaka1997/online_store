import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assests/icons/search.png";
import userIcon from "../assests/icons/user.png";
import logo from "../assests/icons/logo.png";
import "./NavBar.css";
import NavbarOffCanvas from "./NavbarOffCanvas";

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    toggleSearchBar();
  };
  return (
    <div>
      <div className="p-1 p-md-2 navbar-container">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-block d-lg-none">
            <NavbarOffCanvas />
          </div>
          <div>
            <img src={logo} alt="logo" style={{width:"75px"}} />
          </div>
          <div className="d-none d-lg-flex justify-content-center p-3 navlinks-container">
            <Link className="me-4" to={"/"}>
              Home
            </Link>
            <Link className="me-4" to={"/products"}>
              Products
            </Link>
            <Link className="me-4" to={"/add-product"}>
              About
            </Link>
            <Link className="me-4" to={"/add-product"}>
              Contact
            </Link>
          </div>
          <div className="button-container">
            <img src={searchIcon} alt="Search" onClick={toggleSearchBar} />
            <Link className="d-none d-lg-inline " to={"/login"}>
              <img src={userIcon} alt="user" />
            </Link>
          </div>
        </div>
      </div>
      {showSearchBar && (
        <div className="searchBar-container d-flex w-100 justify-content-center">
          <form onSubmit={onSubmit}>
            <div className="d-flex">
              <img src={searchIcon} alt="Search" />
              <input type="text" placeholder="Search for products" />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavBar;
