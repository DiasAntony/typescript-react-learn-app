// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
}

// interface FetchGenreResponse {
//   count: number;
//   results: Genres[];
// }

// const useGenre = () => {
//   const [genres, setGenres] = useState<Genres[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
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

//   return { genres, error, loading };
// };

const useGenre = () => useData<Genres>("/genres");

export default useGenre;
