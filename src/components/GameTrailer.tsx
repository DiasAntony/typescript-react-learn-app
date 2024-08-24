import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return null;

  //   if (error) return error; // give compile error
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      width={"100%"}
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
