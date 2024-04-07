import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAiringTodayTVshows } from "../../redux/movieSlice";
import { API_OPTIONS, TV_SHOWS } from "../apiDataConstants";

function useAiringTodayTVshows() {
  const dispatch = useDispatch();

  async function getAiringTodayTVshows() {
    const data = await fetch(TV_SHOWS, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addAiringTodayTVshows(json.results));
  }

  useEffect(() => {
    getAiringTodayTVshows();
  }, []);
}

export default useAiringTodayTVshows;