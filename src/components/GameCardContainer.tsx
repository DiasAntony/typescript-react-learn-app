import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = (props: Props) => {
  return (
    <Box width={"100%"} borderRadius={10} overflow={"hidden"}>
      {props.children}
    </Box>
  );
};

export default GameCardContainer;
