import APIClient from "../services/api-client";
import genres from "../data/geners";
import { useQuery } from "react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24h
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
