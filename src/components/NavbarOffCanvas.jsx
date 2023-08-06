import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menuIcon from "../assests/icons/menu.png";
import './NavbarOffCanvas.css'

const NavbarOffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navOffCanvas">
      <img src={menuIcon} alt="Menu icon" onClick={handleShow} />

      <Offcanvas style={{ width: "250px" }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/products"}>All Products</Link>
            <br />
            <Link to={"/add-product"}>Add Product</Link>
            <br />
            <Link to={"/login"}>Login</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavbarOffCanvas;
