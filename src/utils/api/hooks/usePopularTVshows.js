import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTVshows } from "../../redux/movieSlice";
import { API_OPTIONS, POPULAR_TV_SHOWS } from "../apiDataConstants";

function usePopularTVshows() {
  const dispatch = useDispatch();

  async function getpopularTVshows() {
    const data = await fetch(POPULAR_TV_SHOWS, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addPopularTVshows(json.results));
  }

  useEffect(() => {
    getpopularTVshows();
  }, []);
}

export default usePopularTVshows;