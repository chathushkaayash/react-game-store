import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../../hooks/useData";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default usePlatforms;
