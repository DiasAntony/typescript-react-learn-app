// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

import useData from "./useData";
import { Genres } from "./useGenre";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Games {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[]; //why becouse parent_platforms:[{platform:{id:1,name:"PC",slug:"pc"}},{platform:{id:2,name:"XO",slug:"xo"}},{platform:{id:3,name:"Laptop",slug:"lap"}}]
//   metacritic: number;
// }

// interface FetchGameResponse {
//   count: number;
//   results: Games[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Games[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGameResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setLoading(false);
//         setError(err.message);
//       });
//     // .finally(() => {
//     //   setLoading(false); // Move setLoading inside finally block   //why not finaly coz loading doesn't appear in developement
//     // });

//     return () => controller.abort();
//   }, []);

//   return { games, error, loading };
// };

// export default useGames;

// ------------------------------- New Way we just use this Hook for hiding url in that components -----------------------------------------

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //why becouse parent_platforms:[{platform:{id:1,name:"PC",slug:"pc"}},{platform:{id:2,name:"XO",slug:"xo"}},{platform:{id:3,name:"Laptop",slug:"lap"}}]
  metacritic: number;
}

const useGames = (selectedGenre: Genres | null) =>
  useData<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
