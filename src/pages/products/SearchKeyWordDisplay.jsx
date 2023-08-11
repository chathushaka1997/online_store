import React from "react";
import { useNavigate } from "react-router-dom";

const SearchKeyWordDisplay = ({ keyword, count }) => {
  const navigate = useNavigate();
  const handleReset = () => {
    const newURL = `/products`;
    navigate(newURL);
  };
  return (
    <div className="d-flex">
      {keyword ? (
        <>
          {count > 0 ? (
            <h5 className="mb-4">
              Showing {count} results for "{keyword}".
            </h5>
          ) : (
            <h5 className="mb-4">No results found for "{keyword}".</h5>
          )}
          <div>
            <p onClick={handleReset} style={{ cursor: "pointer" }} className="ms-3 text-danger p-0 m-0">
              Reset search
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SearchKeyWordDisplay;
