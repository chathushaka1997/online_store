import React, { useEffect, useState } from "react";
import useBrands from "../../customHooks/useBrands";
import { useParams } from "react-router-dom";

const AddBrand = ({ componentName, isEdit = false }) => {
  const { handleCreateBrand, error, isLoading, getBrandById, brands, handleEditBrand } = useBrands();
  const { id } = useParams();
  const [currentBrand, setCurrentBrand] = useState({ name: "" });

  useEffect(() => {
    if (id) {
      const selectedBrand = getBrandById(id);
      if (selectedBrand) {
        setCurrentBrand(selectedBrand);
      }
    }
  }, [id, brands]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      handleEditBrand({ name: currentBrand?.name, _id: currentBrand?._id });
    } else {
      handleCreateBrand(event.target.name.value);
    }
    event.target.reset();
  };
  return (
    <div className="container">
      <h2 className="text-primary fw-bolder mb-3">{componentName}</h2>
      <div className="">
        <form style={{ maxWidth: "400px" }} className="w-100 border p-4" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="form-group mb-2">
            <label htmlFor="name" className="fw-bold">
              Brand Name
            </label>
            <input
              value={currentBrand?.name}
              onChange={(e) => setCurrentBrand((prevState) => ({ ...prevState, name: e.target.value }))}
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-primary">
            {isLoading && (
              <div className="spinner-border spinner-border-sm me-1" role="status">
                <span className="sr-only"></span>
              </div>
            )}
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
