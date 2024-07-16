import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../react-query/constants";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default useGenres;
