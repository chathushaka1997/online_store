import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../assests/icons/search.png";
import userIcon from "../assests/icons/user.png";
import logo from "../assests/icons/logo.png";
import "./NavBar.css";
import NavbarOffCanvas from "./NavbarOffCanvas";

const NavBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      params.set("keyword", keyword);
    } else {
      params.delete("keyword");
    }
    // Build the new URL with the updated parameters
    const newURL = `/products?${params.toString()}`;
    // Update the URL without reloading the page

    navigate(newURL);
    e.target.reset();
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };


  return (
    <div>
      <div className="p-1 p-md-2 navbar-container">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-block d-lg-none">
            <NavbarOffCanvas />
          </div>
          <div>
            <img src={logo} alt="logo" style={{ width: "75px" }} />
          </div>

          <div className="button-container">
            <div className="d-inline-block d-lg-none">
              <img src={searchIcon} alt="Search" onClick={toggleSearchBar} />
            </div>
            <div className="d-none d-lg-flex justify-content-center p-2 navlinks-container">
              <div className="me-4 searchBar-container-inline">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="keyword" placeholder="Search for products" />
                  <button type="submit">
                    <img src={searchIcon} alt="Search" />
                  </button>
                </form>
              </div>
              <NavLink className="me-4" to={"/"} exact activeClassName="active">
                Home
              </NavLink>
              <NavLink className="me-4" to={"/products"} exact activeClassName="active">
                Products
              </NavLink>
              <NavLink className="me-4" to={"/about-us"} exact activeClassName="active">
                About
              </NavLink>
              <NavLink className="me-4" to={"/contact-us"} exact activeClassName="active">
                Contact
              </NavLink>
              <Link className="d-none d-lg-inline " to={"/login"}>
                <img src={userIcon} alt="user" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showSearchBar && (
        <div className="searchBar-container d-flex w-100 justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="d-flex">
              <img src={searchIcon} alt="Search" />
              <input type="text" name="keyword" placeholder="Search for products" />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavBar;
