import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
// 10.7
interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        /> 
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
