import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTVshows } from "../../redux/movieSlice";
import { API_OPTIONS, TOP_RATED_TV_SHOWS } from "../apiDataConstants";

function useTopRatedTVshows() {
  const dispatch = useDispatch();

  async function getTopRatedTVshows() {
    const data = await fetch(TOP_RATED_TV_SHOWS, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addTopRatedTVshows(json.results));
  }

  useEffect(() => {
    getTopRatedTVshows();
  }, []);
}

export default useTopRatedTVshows;