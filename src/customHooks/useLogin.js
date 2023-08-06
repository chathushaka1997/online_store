import  { useState } from "react";
import { UserServices } from "../services/UserServices";

const useLogin = () => {
  const [error, setError] = useState("");
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
