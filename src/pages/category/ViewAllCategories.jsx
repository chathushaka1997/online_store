import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../../customHooks/useCategory";

const ViewAllCategories = () => {
    const { categories } = useCategory();
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="fw-bolder d-inline-block text-primary">All Categories</h3>
        <Link className="btn btn-primary" to={`/add-category`}>
          Add Category
        </Link>
      </div>
      <div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category?._id}>
                <th scope="row">{index + 1}</th>
                <td>{category?.name}</td>
                <td>
                  <Link to={`/edit-category/${category?._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllCategories;
