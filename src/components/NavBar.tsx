import { Box, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/game (2).webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerchInput from "./SerchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Box width={{ base: "80px", md: "57px" }}>
        <Link to={"/"}>
          <Image src={Logo} boxSize={"50px"} objectFit={"cover"} />
        </Link>
      </Box>
      <SerchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
