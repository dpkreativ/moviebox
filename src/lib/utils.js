const BASE_URL = "https://api.themoviedb.org/3";

const GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
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
export async function getMovies() {
  const url = `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
  const options = GET;

  const res = await fetch(url, options);
  const data = await res.json();

  return data.results;
}
