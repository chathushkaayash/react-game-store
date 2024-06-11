import { GameQuery } from "../../App";
import APIClient from "./api-client";
import { Platform } from "./platformService";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

const create=(gameQuery:GameQuery)=>new APIClient<Game>("/games",{
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  },
  [gameQuery]);

  export default create;


