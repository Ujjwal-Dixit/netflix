import NavigationBar from "./NavigationBar";
import useNowPlayingMovies from "../utils/api/hooks/useNowPlayingMovies";
import Trailer from "./Trailer";
import MovieContainer from "./MovieContainer";
import useTopRatedMovies from "../utils/api/hooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/api/hooks/useUpcomingMovies";
import useAiringTodayTVshows from "../utils/api/hooks/useAiringTodayTVshows";
import usePopularTVshows from "../utils/api/hooks/usePopularTVshows";
import useTopRatedTVshows from "../utils/api/hooks/useTopRatedTVshows";

function NetflixHomePage() {

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTVshows();
  usePopularTVshows();
  useTopRatedTVshows();

  return (
    <div>
      <NavigationBar />
      <Trailer />
      <MovieContainer />
    </div >
  )
}

export default NetflixHomePage;