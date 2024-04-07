import { useSelector } from "react-redux";
import TrailerDetails from "./pages/TrailerDetails";
import TrailerBackground from "./pages/TrailerBackground";

function Trailer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if (movies === null) return;
  const mainMovie = movies[4];
  console.log(mainMovie);

  const movieTitle = mainMovie.title;
  const movieDescription = mainMovie.overview;
  const movieId = mainMovie.id;

  return (
    <div className="-mt-44">
      <TrailerDetails title={movieTitle} description={movieDescription} />
      <TrailerBackground movieId={movieId} />
    </div>
  )
}

export default Trailer;