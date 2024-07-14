import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGid from "./components/GameGid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genres } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenresList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <GameGid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
