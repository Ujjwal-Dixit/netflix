import { useEffect, useState } from "react";
import { API_OPTIONS, TRAILER_API } from "../apiDataConstants";

function useMovieTrailer(movieId) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    async function fetchTrailer() {
      const trailerApiEndpoint = TRAILER_API.replace('${movieId}', movieId);
      const data = await fetch(trailerApiEndpoint, API_OPTIONS);
      const json = await data.json();
      const trailer = json.results.find(
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    }
    fetchTrailer();
  }, [movieId]);

  return trailerKey;
}

export default useMovieTrailer;