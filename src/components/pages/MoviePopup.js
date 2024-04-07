import useMovieTrailer from "../../utils/api/hooks/useMovieTrailer";

function MoviePopup({ movieId, title, releaseDate }) {

  const youtubeKey = useMovieTrailer(movieId);


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 font-netflix-sans cursor-pointer">
      <div className="bg-black bg-opacity-75 w-96 h-72 flex items-center justify-center rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1&controls=0&modestbranding=0&loop=0&playlist=${youtubeKey}&showinfo=0&fs=1&rel=0`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
        </iframe>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-sm-bold">{title}</h3>
          <p className="text-sm">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
