import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading)
    return (
      <SkeletonText
        noOfLines={30}
        spacing={4}
        startColor="green.500"
        endColor="gray.500"
      />
    );

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genre
      </Heading>
      <List>
        {/* {genres.map((e) => ( */}
        {data?.results?.map((e) => (
          <ListItem key={e.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(e.image_background)}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"} //generally btn don't wrap text so overlap or break the css seems like [whiteSpace={'nowarp'} ]==>defaultly so we changed it...
                textAlign={"left"}
                onClick={() => setGenreId(e.id)}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={e.id == genreId ? "bold" : "normal"}
                color={e.id == genreId ? "green.500" : ""}
              >
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
