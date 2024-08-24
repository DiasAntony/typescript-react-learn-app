import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entites/Trailer";

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>("games/" + gameId + "/movies");

 return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
