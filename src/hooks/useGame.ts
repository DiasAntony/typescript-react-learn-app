import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Game } from "../entites/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug], //whenever the slug change query refetch
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
