import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entites/Game";
import { getCroppedImageUrl } from "../services/image-url";
import CreticScore from "./CreticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
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
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CreticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={`/games/${game.slug}`}>{game.name} </Link>{" "}
          <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
