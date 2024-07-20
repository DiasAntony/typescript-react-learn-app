import { Games } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CreticScore from "./CreticScore";
import { getCroppedImageUrl } from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Box height={250} overflow={"hidden"}>
        <Image
          transition={"transform .2s"}
          _hover={{
            transform:
              " scale(1.1)" /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */,
          }}
          src={getCroppedImageUrl(game.background_image)}
        />
      </Box>

      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
