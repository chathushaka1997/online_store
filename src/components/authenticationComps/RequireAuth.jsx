import React, { useEffect, useState } from "react";
import { useAuth } from "./auth";
import { UserServices } from "../../services/UserServices";
import { toast } from "react-toastify";
import InitialLoading from "./../common/InitialLoading";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const response = await UserServices.getMe();
      setIsLoading(false);
      if (response.success) {
        auth?.login(response.data);
      } else if (!response.success) {
        auth?.logout();
        console.log(response);
        if (typeof response.error == "string") {
          throw Error(response.error);
        } else {
          throw Error(response.error);
        }
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  if (isLoading) {
    return <InitialLoading />;
  }

  if (!auth?.user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default RequireAuth;
