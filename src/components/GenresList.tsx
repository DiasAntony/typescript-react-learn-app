// import useData from "../hooks/useData";
// import useGenre, { Genres } from "../hooks/useGenre";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenre, { Genres } from "../hooks/useGenre";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
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
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genre
      </Heading>
      <List>
        {/* {genres.map((e) => ( */}
        {data.map((e) => (
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
                onClick={() => onSelectGenre(e)}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={e.id == selectedGenre?.id ? "bold" : "normal"}
                color={e.id == selectedGenre?.id ? "green.500" : ""}
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
