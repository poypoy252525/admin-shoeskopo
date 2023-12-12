import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/orderitems.php");

interface Data extends OrderItem, Product, Customer, Order {}

const useOrderItem = (id: number) =>
  useQuery<Data[], AxiosError>({
    queryKey: ["orders", id],
    queryFn: () => apiClient.get({ params: { id } }),
  });

export default useOrderItem;
