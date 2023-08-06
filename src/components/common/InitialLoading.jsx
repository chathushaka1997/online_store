import React from "react";

const InitialLoading = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ width: "100%", height: "50vh" }}>
      <div className="spinner-border text-primary me-3" role="status"></div>
      <h4 className="m-0 p-0">Loading...</h4>
    </div>
  );
};

export default InitialLoading;
