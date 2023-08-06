import React from "react";
import useRegister from "../customHooks/useRegister";

const Register = () => {
  const [handleSubmit, error] = useRegister();

  return (
    <div className="container d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "500px" }} className="mt-5">
        <h2 className="text-primary">Register</h2>
        <div className="border p-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <input type="email" id="email" name="email" className="form-control" required autoComplete="off" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="name" className="fw-bold">
                Name
              </label>
              <input type="text" id="name" name="name" className="form-control" required autoComplete="off" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="fw-bold">
                Password
              </label>
              <input type="password" id="password" name="password" className="form-control" required autoComplete="off" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="confPassword" className="fw-bold">
                Confirm Password
              </label>
              <input type="password" id="confPassword" name="confPassword" className="form-control" required autoComplete="off" />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary px-5">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
