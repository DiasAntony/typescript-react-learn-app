import ms from "ms";
import { useQuery } from "react-query";
import genres from "../data/geners";
import APIClient from "../services/api-client";
import { Genre } from "../entites/Genre";

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
