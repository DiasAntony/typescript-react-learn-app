import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genres } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genres | null;
  // selectedPlatform: Platform | null;
}

// const GameGid = ({ selectedGenre, selectedPlatform }: Props) => {
const GameGid = ({ gameQuery }: Props) => {
  // const { games, error, loading } = useGames();
  // const { data, error, loading } = useGames(selectedGenre, selectedPlatform);
  const { data, error, loading } = useGames(gameQuery);

  const skelitons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={3}
      >
        {loading &&
          skelitons.map((e) => (
            <GameCardContainer key={e}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* {games.map((game) => ( */}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGid;
