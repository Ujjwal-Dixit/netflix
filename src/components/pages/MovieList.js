import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  console.log(movies);

  return (
    <div className="ml-8">
      <div>
        <h1 className="text-xl font-sm-bold mb-4 text-white pt-10 font-netflix-sans">{title}</h1>
        <div className="flex overflow-x-auto w-auto h-auto cursor-pointer">
          {movies && movies.map((movie) =>
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={!movie.title ? movie.name : movie.title}
              popularity={movie.popularity}
              releaseDate={!movie.release_date ? movie.first_air_date : movie.release_date}
              movieId={movie.id}
            />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;