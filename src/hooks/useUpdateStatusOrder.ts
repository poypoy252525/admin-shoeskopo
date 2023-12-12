import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const apiClient = new APIClient("/orders.php");

interface UpdateStatusData {
  status: string;
  order_id: number;
}

const useUpdateStatusOrder = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation<Result, AxiosError, UpdateStatusData>({
    mutationFn: (statusData: UpdateStatusData) => apiClient.put(statusData),
    onSuccess: (result) => {
      if (result.status === "success") {
        toast({
          title: "Success",
          description: result.message,
          status: "success",
          duration: 3000,
          position: "bottom-right",
        });

        navigate("/orders");
      } else {
        toast({
          title: "Error",
          description: result.message,
          status: "error",
          duration: 3000,
          position: "bottom-right",
        });
      }
    },
  });
};

export default useUpdateStatusOrder;
