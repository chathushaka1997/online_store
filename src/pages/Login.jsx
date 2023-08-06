import useLogin from "../customHooks/useLogin";

const Login = () => {
  const [handleSubmit, error] = useLogin();
  return (
    <div className="container d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "500px" }} className="mt-5">
        <h2 className="text-primary">Login</h2>
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
              <label htmlFor="password" className="fw-bold">
                Password
              </label>
              <input type="password" id="password" name="password" className="form-control" required autoComplete="off" />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary px-5">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
