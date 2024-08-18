import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelecter = () => {
  const { data, error, isLoading } = usePlatforms();

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(platformId);
  if (error) return null;

  return (
    <Skeleton
      height="40px"
      isLoaded={!isLoading}
      minWidth={"8rem"}
      startColor="green.500"
      endColor="gray.500"
      fadeDuration={2}
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((plat) => (
            <MenuItem key={plat.id} onClick={() => setPlatformId(plat.id)}>
              {plat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Skeleton>
  );
};

export default PlatformSelecter;
