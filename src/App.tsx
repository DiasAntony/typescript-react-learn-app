import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGid from "./components/GameGid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genres } from "./hooks/useGenre";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //without as we can't set empty object value as a initial value

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenresList
              selectedGenre={gameQuery.genre}
              // selectedGenre={selectedGenre}
              // onSelectGenre={(genre) => setSelectedGenre( genre )}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <PlatformSelecter
            selectedPlatform={gameQuery.platform}
            // selectedPlatform={selectedPlatform}
            // onSelectPlatform={(plat) =>
            //   setSelectedPlatform( plat )
            // }
            onSelectPlatform={(plat) =>
              setGameQuery({ ...gameQuery, platform: plat })
            }
          />
          <GameGid
            // selectedGenre={selectedGenre}
            // selectedPlatform={selectedPlatform}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
