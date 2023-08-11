import React from "react";
import { Accordion, Button, Card, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <Link to={"/all-products"} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Admin Panel</span>
        </Link>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Product</Accordion.Header>
            <Accordion.Body>
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <NavLink to={"/all-products"} className="nav-link" exact activeClassName="active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    All Products
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to={"/add-product"} className="nav-link" exact activeClassName="active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Brand</Accordion.Header>
            <Accordion.Body>
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <NavLink to={"/all-brands"} className="nav-link" exact activeClassName="active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    All Brands
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/add-brand"} className="nav-link link-dark" exact activeClassName="active">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Add Brand
                  </NavLink>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <NavLink to={"/admin/category/view-all"} className="nav-link" exact activeClassName="active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    All Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/add-category"} className="nav-link link-dark" exact activeClassName="active">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Add Category
                  </NavLink>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Tag</Accordion.Header>
            <Accordion.Body>
              <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                  <NavLink to={"/admin/tag/view-all"} className="nav-link" exact activeClassName="active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    All Tags
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/add-tag"} className="nav-link link-dark" exact activeClassName="active">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Add Tag
                  </NavLink>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <hr />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Link
              href="#"
              class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
              <strong>mdo</strong>
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default SideBar;
