import { getClassByRate, getImagePath } from "../api";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="m-4 bg-indigo-900 shadow-md relative overflow-hidden rounded hover-effect">
      <div>
        <img src={getImagePath(movie.poster_path)} alt={movie.title} />
      </div>
      <div className="text-gray-400 flex items-center justify-between gap-1 pt-2 pb-4 px-4 lett tracking-wide">
        <h3 className="mt-0">{movie.title}</h3>
        <span
          className={`bg-blue-950 ${getClassByRate(
            movie.vote_average
          )} py-1 px-2 rounded font-bold`}
        >
          {movie.vote_average}
        </span>
      </div>
      <div className="bg-white p-8 absolute left-0 bottom-0 right-0 max-h-full overflow-y-auto transition-transform duration-300 ease-in">
        <h3>Overview</h3>
        {movie.overview}
      </div>
    </div>
  );
};

export default MovieCard;
