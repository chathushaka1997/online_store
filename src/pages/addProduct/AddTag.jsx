import React, { useEffect, useState } from "react";
import useTags from "../../customHooks/useTags";
import { useParams } from "react-router-dom";

const AddTag = ({ componentName, isEdit = false }) => {
  const { handleCreateTag, error, isLoading, tags, getTagById, handleEditTag } = useTags();

  const { id } = useParams();
  const [currentTag, setCurrentTag] = useState({ name: "" });

  useEffect(() => {
    if (id) {
      const selectedTag = getTagById(id);
      if (selectedTag) {
        setCurrentTag(selectedTag);
      }
    }
  }, [id, tags]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit) {
      handleEditTag({ name: currentTag?.name, _id: currentTag?._id });
    } else {
      handleCreateTag(event.target.name.value);
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
            <label htmlFor="name" className="fw-bold">
              Tag Name
            </label>
            <input
              value={currentTag?.name}
              onChange={(e) => setCurrentTag((prevState) => ({ ...prevState, name: e.target.value }))}
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

export default AddTag;
