import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/update-product.php");

const useUpdateProduct = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation<{ status: string; message: string }, AxiosError, FormData>(
    {
      mutationFn: (product: FormData) =>
        apiClient.post(product, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
      onSuccess: (result) => {
        if (result.status === "success") {
          toast({
            title: "Success",
            description: result.message,
            status: "success",
            position: "bottom-right",
            isClosable: true,
            duration: 3000,
          });
          navigate("/products");
        } else {
          toast({
            title: "Error",
            description: result.message,
            status: "error",
            position: "bottom-right",
            isClosable: true,
            duration: 3000,
          });
        }
      },
    }
  );
};

export default useUpdateProduct;
