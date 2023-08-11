import  { useState } from "react";
import { UserServices } from "../services/UserServices";
import { useAuth } from "../components/authenticationComps/auth";

const useLogin = () => {
  const [error, setError] = useState("");
  const auth = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    const reqData = { email, password };

    try {
      const response = await UserServices.login(reqData);
      console.log(response);
      if (response.success) {
        auth.getUserData()
      } else {
        setError(response?.error || "Registration failed");
      }
    } catch (error) {
      setError(error || "Registration failed");
    }
  };

  return [handleSubmit,error]
};

export default useLogin;
