import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGid = () => {
  const { games, error, loading } = useGames();

  const skelitons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {loading && skelitons.map((e) => <GameCardSkeleton key={e} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid> 
    </>
  );
};

export default GameGid;
