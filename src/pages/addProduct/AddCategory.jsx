import React from "react";
import useCategory from "../../customHooks/useCategory";

const AddCategory = () => {
  const {handleCreateCategory, error, isLoading} = useCategory();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateCategory(event.target.category.value);
  };
  return (
    <div className="container">
      <h3 className="text-primary fw-bolder mb-3">Add Category</h3>
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
            <input type="text" id="category" name="category" className="form-control" required />
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
