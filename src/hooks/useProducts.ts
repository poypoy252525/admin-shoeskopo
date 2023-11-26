import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Product } from "../entities/product";
import { AxiosError } from "axios";

const apiClient = new APIClient("/products.php");

const useProducts = () =>
  useQuery<Product[], AxiosError>({
    queryKey: ["products"],
    queryFn: () => apiClient.getAll(),
  });

export default useProducts;
