import { Image, ImageProps } from "@chakra-ui/react";
import star from "../assets/star-alt-svgrepo-com.svg";
import medel from "../assets/star-medal-favorite-award-prize-svgrepo-com.svg";
import shine from "../assets/star-svgrepo-com.svg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: star, alt: "star", boxSize: "35px" },
    4: { src: medel, alt: "medel", boxSize: "30px" },
    5: { src: shine, alt: "shine", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
