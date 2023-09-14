const BASE_URL = "https://api.themoviedb.org/3";

const GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN}`,
  },
};

// Get TMDB API configurations
export async function getConfig() {
  const url = `${BASE_URL}/configuration`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

// Get top-rated movies from TMDB API
export async function getTopMovies() {
  const url = `${BASE_URL}/movie/popular?language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data.results;
}

// Get movie by id
export async function getMovieById(movie_id) {
  const url = `${BASE_URL}/movie/${movie_id}?language=en-US`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

// Search movies
export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}
