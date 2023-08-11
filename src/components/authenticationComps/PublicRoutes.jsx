import React from "react";
import { useAuth } from "./auth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const auth = useAuth();

  if (auth?.user) {
    return <Navigate to="/all-products" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
