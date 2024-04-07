import { useSelector } from "react-redux";
import MovieList from "./pages/MovieList";

function MovieContainer() {
  const movies = useSelector((store) => store.movies);
  console.log("MOVIES: " + movies)

  return (
    <div className="mt-6" style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
      <div className="-mt-56 relative z-40 font-netflix-sans text-gray-300">
        <MovieList title={"Continue watching for Ujjwal Dixit"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"TV Shows"} movies={movies.airingTodayTVshows} />
        <MovieList title={"Top Rated TV Shows"} movies={movies.topRatedTVshows} />
        <MovieList title={"Popular TV Shows"} movies={movies.popularTVshows} />
      </div>
    </div>
  )
}

export default MovieContainer;