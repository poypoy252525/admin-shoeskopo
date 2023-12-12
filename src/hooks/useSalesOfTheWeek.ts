import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { AxiosError } from "axios";

const apiClient = new APIClient("/sales.php");

interface Week {
  Sunday: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
}

const useSalesOfTheWeek = () =>
  useQuery<Week, AxiosError>({
    queryKey: ["salesoftheweek"],
    queryFn: () => apiClient.getAll(),
  });

export default useSalesOfTheWeek;
