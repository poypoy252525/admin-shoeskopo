import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Product } from "../entities/product";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";

const apiClient = new APIClient("/deleteproduct.php");

const useDeleteProduct = (cb?: () => void) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation<Product, AxiosError, number>({
    mutationFn: (id: number) => apiClient.delete(id),
    onSuccess: (product) => {
      toast({
        title: "Deleted",
        description: "The " + product.name + " has been deleted",
        status: "success",
        position: "bottom-right",
        duration: 3000,
      });
      cb && cb();
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useDeleteProduct;
