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

interface Props {
  onSelectPlatform: (plat: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelecter = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, loading } = usePlatforms();

  if (error) return null;

  return (
    <Skeleton
      height="40px"
      isLoaded={!loading}
      width={"8rem"}
      startColor="green.500"
      endColor="gray.500"
      fadeDuration={2}
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {/* {selectedPlatform ? selectedPlatform.name : "Platforms"} */}
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((plat) => (
            <MenuItem key={plat.id} onClick={() => onSelectPlatform(plat)}>
              {plat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Skeleton>

    // <Menu>
    //   <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    //     Platforms
    //   </MenuButton>
    //   <MenuList>
    //     {data.map((plat) => (
    //       <MenuItem key={plat.id}>{plat.name}</MenuItem>
    //     ))}
    //   </MenuList>
    // </Menu>
  );
};

export default PlatformSelecter;
