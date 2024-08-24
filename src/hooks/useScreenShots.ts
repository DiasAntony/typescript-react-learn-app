import { useQuery } from "react-query";
import Screenshots from "../entites/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
