import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SerchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // only render setSearchText change
  const setSearchText = useGameQueryStore((s) => s.setSearchText); //optimize code
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SerchInput;
