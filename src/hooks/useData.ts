import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { string } from "zod";

export interface T {
  id: number;
  name: string;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(true);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;

const add = <T>(endpoint:string) => {
  console.log(endpoint)
};



const addNumbers = ()=>add<number>('/number')

const addStrings = ()=>add<string>('/string')

addNumbers();
addStrings();


