// import useData from "../hooks/useData";
// import useGenre, { Genres } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genres } from "../hooks/useGenre";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  // const { genres } = useGenre();
  // const { data } = useData<Genres>("/genres");
  const { data, loading, error } = useGenre();

  if (error) return null;

  if (loading)
    return (
      <SkeletonText
        noOfLines={30}
        spacing={4}
        startColor="green.500"
        endColor="gray.500"
      />
    );

  return (
    <List>
      {/* {genres.map((e) => ( */}
      {data.map((e) => (
        <ListItem key={e.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(e.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(e)}
              variant={"link"}
              fontSize={"lg"}
            >
              {e.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
