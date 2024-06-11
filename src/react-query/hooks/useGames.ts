import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constants";
import create, { Game } from "../services/gameService";
import { FetchResponse } from "../../hooks/useData";
import { GameQuery } from "../../App";



const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: CACHE_KEY_GAMES(gameQuery),
    queryFn: create(gameQuery).getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useGames;
