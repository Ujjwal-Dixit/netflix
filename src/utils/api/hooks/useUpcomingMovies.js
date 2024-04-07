import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../redux/movieSlice";
import { API_OPTIONS, UPCOMING_MOVIES } from "../apiDataConstants";

function useUpcomingMovies() {
  const dispatch = useDispatch();

  async function getUpcomingMovies() {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;