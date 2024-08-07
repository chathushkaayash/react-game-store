import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../react-query/constants";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};

export default usePlatforms;
