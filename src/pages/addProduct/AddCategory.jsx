import React, { useEffect, useState } from "react";
import useCategory from "../../customHooks/useCategory";
import { useParams } from "react-router-dom";

const AddCategory = ({ componentName, isEdit = false }) => {
  const { handleCreateCategory, error, isLoading, getCategoryById, handleEditCategory, categories } = useCategory();
  const { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState({ name: "" });

  useEffect(() => {
    if (id) {
      const selectedCategory = getCategoryById(id);
      if (selectedCategory) {
        setCurrentCategory(selectedCategory);
      }
    }
  }, [id, categories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      handleEditCategory({ name: currentCategory?.name, _id: currentCategory?._id });
    } else {
      handleCreateCategory(event.target.category.value);
    }
    event.target.reset();
  };
  return (
    <div className="container mt-5">
      <h3 className="text-primary fw-bolder mb-3">{componentName}</h3>
      <div className="">
        <form style={{ maxWidth: "400px" }} className="w-100 border p-4" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="form-group mb-2">
            <label htmlFor="category" className="fw-bold">
              Category Name
            </label>
            <input
              value={currentCategory?.name}
              onChange={(e) => setCurrentCategory((prevState) => ({ ...prevState, name: e.target.value }))}
              type="text"
              id="category"
              name="category"
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

export default AddCategory;
