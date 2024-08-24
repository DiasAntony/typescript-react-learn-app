import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entites/Game";
import CreticScore from "./CreticScore";
import DefenistionItem from "./DefenistionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefenistionItem term="platforms">
        {/* just destuctured the platform object instead of p.platform */}
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefenistionItem>
      <DefenistionItem term="Metascore">
        <CreticScore score={game.metacritic} />
      </DefenistionItem>
      <DefenistionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefenistionItem>
      <DefenistionItem term="Publishers">
        {game.publishers?.map((pubs) => (
          <Text key={pubs.id}>{pubs.name}</Text>
        ))}
      </DefenistionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
