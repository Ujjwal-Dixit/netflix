import { MOVIE_POSTER_URL } from "../../utils/api/apiDataConstants";
import { useState } from "react";
import MoviePopup from "./MoviePopup";

function MovieCard({ movieId, posterPath, title, releaseDate }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <div className="flex-shrink-0 mr-4 w-64 h-48">
    //   <img src={`${MOVIE_POSTER_URL}${posterPath}`} alt="poster" className="w-full h-full object-cover rounded-lg" />
    // </div>







    <div
      className="relative overflow-hidden transition-transform duration-300 transform hover:scale-110 flex-shrink-0 mr-4 w-64 h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${MOVIE_POSTER_URL}${posterPath}`}
        alt="poster"
        className="w-full h-full object-cover rounded-lg"
      />
      {isHovered && (
        <MoviePopup
          title={title}
          releaseDate={releaseDate}
          movieId={movieId}
        />
      )}
    </div>

  )
}

export default MovieCard;