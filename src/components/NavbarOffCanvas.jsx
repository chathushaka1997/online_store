import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../assests/icons/menu.png";
import "./NavbarOffCanvas.css";

const NavbarOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navOffCanvas">
      <img src={menuIcon} alt="Menu icon" onClick={handleShow} />

      <Offcanvas style={{ width: "250px" }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="links">
            <div>
              <NavLink to={"/"} onClick={handleClose}>Home</NavLink>
            </div>

            <div>
              <NavLink to={"/products"} onClick={handleClose}>All Products</NavLink>
            </div>

            <div>
              <NavLink to={"/add-product"} onClick={handleClose}>Add Product</NavLink>
            </div>

            <div>
              <NavLink to={"/login"} onClick={handleClose}>Login</NavLink>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavbarOffCanvas;
