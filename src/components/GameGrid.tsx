import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCartSkelton from "./GameCartSkelton";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error.message}</Text>;

  // sum of games in each page
  const fetchGamesCount =
    games?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage} // !! to convert to boolean
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCartSkelton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          games?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
