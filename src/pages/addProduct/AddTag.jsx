import React from 'react'
import useTags from '../../customHooks/useTags';

const AddTag = () => {
    const { handleCreateTag, error, isLoading } = useTags();

    const handleSubmit = (event) => {
      event.preventDefault();
      handleCreateTag(event.target.name.value);
    };
    return (
      <div className="container">
        <h2 className="text-primary fw-bolder mb-3">Add Tag</h2>
        <div className="">
          <form style={{ maxWidth: "400px" }} className="w-100 border p-4" onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-group mb-2">
              <label htmlFor="name" className="fw-bold">
                Tag Name
              </label>
              <input type="text" id="name" name="name" className="form-control" required />
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
}

export default AddTag