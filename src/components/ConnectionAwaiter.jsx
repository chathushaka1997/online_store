import React from "react";
import usePing from "../customHooks/usePing";

const ConnectionAwaiter = () => {
  const isloading = usePing("https://onlline-store-backend.onrender.com/api");
  return (
    <>
      {isloading ? (
        <div className="alert alert-warning text-center" role="alert">
          <div className="d-flex justify-content-center">
            <h5>Connecting to Server. Please wait...</h5>
            <div className="ms-2 spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
          <p>
            This is a test site, and we are currently utilizing free hosting services. Please be aware that there might be a delay of approximately 1 minute for
            the server to initiate. Kindly wait until the initial load is complete.
          </p>
        </div>
      ) : null}
    </>
  );
};

export default ConnectionAwaiter;
