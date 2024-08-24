import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import GameGid from "../components/GameGid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlatformSelecter from "../components/PlatformSelecter";
import SortSelecter from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelecter />
            <SortSelecter />
          </HStack>
        </Box>
        <GameGid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
