const API_KEY = "22af7f306d9cc6458e0d04eb2b74c476";

const API_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmFmN2YzMDZkOWNjNjQ1OGUwZDA0ZWIyYjc0YzQ3NiIsInN1YiI6IjY2MGIxYzA3OWM5N2JkMDE3Y2EzZmFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wE0hgVlODujigMJh_hAynr5R4pAOXV5VEtaO2ML6IW4";

export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TRAILER_API = "https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_ACCESS_TOKEN}`
  }
};

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w200/";

export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const TV_SHOWS = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";

export const POPULAR_TV_SHOWS = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";

export const TOP_RATED_TV_SHOWS = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";