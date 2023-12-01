import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const apiClient = new APIClient("/login-admin.php");

const useLogin = () => {
  const navigate = useNavigate();
  return useMutation<Customer, AxiosError, CustomerLogin>({
    mutationFn: (customerLogin: CustomerLogin) =>
      apiClient.post<CustomerLogin>(customerLogin),
    onSuccess: (data) => {
      if (data.email) {
        var userStr = JSON.stringify(data);
        localStorage.setItem("auth", userStr);
        navigate("/");
      } else {
        alert("Failed to login. Please try again.");
      }
    },
  });
};

export default useLogin;
