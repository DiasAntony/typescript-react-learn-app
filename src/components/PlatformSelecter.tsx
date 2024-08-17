import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Skeleton,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (plat: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelecter = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);
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
            <MenuItem key={plat.id} onClick={() => onSelectPlatform(plat)}>
              {plat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Skeleton>

  );
};

export default PlatformSelecter;
