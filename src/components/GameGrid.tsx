import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client3";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCartSkelton from "./GameCartSkelton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGames from "../react-query/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer key={s}>
            <GameCartSkelton />
          </GameCardContainer>
        ))}

      {!isLoading &&
        games?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
