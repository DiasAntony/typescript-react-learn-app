import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// generic Hook

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setLoading(false);
          setError(err.message);
        });
      // .finally(() => {
      //   setLoading(false); // Move setLoading inside finally block   //why not finaly coz loading doesn't appear in developement
      // });

      return () => controller.abort();
    },
    deps ? [...deps] : [] //[..dep ] list of dependencies future we wil may have use more dependencies --> it's will re render if any one dependencie of list of dependecies change
  );

  return { data, error, loading };
};

export default useData;
