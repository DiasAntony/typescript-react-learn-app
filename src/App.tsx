import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGid from "./components/GameGid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelecter from "./components/PlatformSelecter";
import SortSelecter from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>(
    {} as GameQuery
  );

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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenresList
             selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelecter
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(plat) =>
                  setGameQuery({ ...gameQuery, platformId: plat.id, })
                }
              />
              <SortSelecter
                onSelectSortOrder={(so) =>
                  setGameQuery({ ...gameQuery, sortOrder: so })
                }
                selectedSortOrder={gameQuery.sortOrder}
              />
            </HStack>
          </Box>
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
