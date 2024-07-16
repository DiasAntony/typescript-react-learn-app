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
import useGames from "../hooks/useGames";

interface Props {
  onSelectSortOrder: (order: string) => void;
  selectedSortOrder: string | null;
}

const SortSelecter = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find((o) => o.value == selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {selectedPlatform ? selectedPlatform.name : "Platforms"} */}
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>

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

export default SortSelecter;
