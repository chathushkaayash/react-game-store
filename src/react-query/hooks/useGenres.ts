import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "../../hooks/useData";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useGenres;
