import React, { useEffect } from "react";
import useBrands from "../../customHooks/useBrands";
import { Link } from "react-router-dom";

const ViewAllBrands = () => {
  const { brands } = useBrands();
  useEffect(() => {
    console.log(brands);
  }, [brands]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="fw-bolder d-inline-block text-primary">All Brands</h3>
        <Link className="btn btn-primary" to={`/add-brand`}>
          Add Brand
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
            {brands.map((brand, index) => (
              <tr key={brand?._id}>
                <th scope="row">{index + 1}</th>
                <td>{brand?.name}</td>
                <td>
                  <Link to={`/edit-brand/${brand?._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllBrands;
