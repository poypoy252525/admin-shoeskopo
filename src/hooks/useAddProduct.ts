import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/addproduct.php");

const useAddProduct = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation<{ status: string; message: string }, AxiosError, FormData>(
    {
      mutationFn: (formData: FormData) =>
        apiClient.post<FormData>(formData, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
      onSuccess: (result) => {
        if (result.status === "success") {
          toast({
            title: result.status,
            description: result.message,
            status: "success",
            isClosable: true,
            position: "bottom-right",
          });
          navigate("/products");
        } else {
          toast({
            title: result.status,
            description: result.message,
            status: "error",
            isClosable: true,
            position: "bottom-right",
          });
        }
      },
    }
  );
};

export default useAddProduct;
