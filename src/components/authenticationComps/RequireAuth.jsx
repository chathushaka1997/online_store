import React from "react";
import { useAuth } from "./auth";
import InitialLoading from "./../common/InitialLoading";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = useAuth();

  if (auth?.user === undefined) {
    return <InitialLoading />;
  } else if (auth?.user === null) {
    return  <Navigate to="/login" replace />
  }


  return <Outlet />;
};

export default RequireAuth;
