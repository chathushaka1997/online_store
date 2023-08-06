import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../customHooks/useProducts";

const ViewAllProducts = () => {
  const { products } = useProducts();
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="fw-bolder d-inline-block text-primary">All Products</h3>
        <Link className="btn btn-primary" to={`/add-product`}>
          Add Product
        </Link>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product?._id}>
                <th scope="row">{index + 1}</th>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
                <td>
                  <Link to={`/edit-product/${product?._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProducts;
