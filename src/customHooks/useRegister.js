import { useState } from 'react'
import { UserServices } from '../services/UserServices';

const useRegister = () => {
    const [error, setError] = useState("");
    const handleSubmit = async (event) => {
      event.preventDefault();
      setError("");
      const email = event.target.email.value;
      const name = event.target.name.value;
      const password = event.target.password.value;
      const confPassword = event.target.confPassword.value;
  
      if (password != confPassword) {
        setError("Passwords not matched");
      }
  
      const reqData = { email, name, password };
  
      try {
        const response = await UserServices.register(reqData);
        console.log(response);
        if (response.success) {
        } else {
          setError(response?.error?.message || "Registration failed");
        }
      } catch (error) {
        setError(error?.message || "Registration failed");
      }
    };

    return [handleSubmit,error]
}

export default useRegister