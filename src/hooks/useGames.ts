import ms from "ms";
import { useInfiniteQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

export interface Game {
  rating_top: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //why becouse parent_platforms:[{platform:{id:1,name:"PC",slug:"pc"}},{platform:{id:2,name:"XO",slug:"xo"}},{platform:{id:3,name:"Laptop",slug:"lap"}}]
  metacritic: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery); //s takes as a selector

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // staleTime: 24 * 60 * 60 * 1000 //24h
    staleTime: ms("24h"),
  });
};

export default useGames;
