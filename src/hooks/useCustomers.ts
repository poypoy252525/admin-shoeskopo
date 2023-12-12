import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/customers.php");

const useCustomers = () =>
  useQuery<Customer[], AxiosError>({
    queryKey: ["customers"],
    queryFn: () => apiClient.getAll(),
  });

export default useCustomers;
