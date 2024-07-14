// import useData from "../hooks/useData";
// import useGenre, { Genres } from "../hooks/useGenre";
import useGenre from "../hooks/useGenre";

const GenresList = () => {
  // const { genres } = useGenre();
  // const { data } = useData<Genres>("/genres");
  const { data } = useGenre();

  return (
    <ul>
      {/* {genres.map((e) => ( */}
      {data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
