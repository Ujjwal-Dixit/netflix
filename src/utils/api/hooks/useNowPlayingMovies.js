import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../redux/movieSlice";
import { API_OPTIONS, NOW_PLAYING_API } from "../apiDataConstants";

function useNowPlayingMovies() {
  const dispatch = useDispatch();

  async function getNowPlayingMovies() {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;