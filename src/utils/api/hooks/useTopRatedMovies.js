import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../redux/movieSlice";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../apiDataConstants";

function useTopRatedMovies() {
  const dispatch = useDispatch();

  async function getTopRatedMovies() {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;