import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/game (2).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerchInput from "./SerchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={Logo} boxSize={"60px"} />
      <SerchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
