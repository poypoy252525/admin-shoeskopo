import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/orders.php");

interface Data extends Order, Customer {}

const useOrders = () =>
  useQuery<Data[], AxiosError>({
    queryKey: ["orders"],
    queryFn: () => apiClient.getAll(),
  });

export default useOrders;
